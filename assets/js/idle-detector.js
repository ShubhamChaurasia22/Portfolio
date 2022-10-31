const main = async () => {
    // Feature detection.
    if (!('IdleDetector' in window)) {
      return console.log('IdleDetector is not available.');
    }
    // Prompt user to select any serial port.
    const port = await navigator.serial.requestPort();

    // Wait for the serial port to open.
    await port.open({ baudRate: 9600 });
    // Request permission to use the feature.
    if (await IdleDetector.requestPermission() !== 'granted') {
      return console.log('Idle detection permission not granted.');
    }
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      
      const idleDetector = new IdleDetector();
      idleDetector.addEventListener('change', () => {
        console.log(`Idle change: ${idleDetector.userState}, ${idleDetector.screenState}.`);
      });    
      await idleDetector.start({
        threshold: 60000,
        signal,
      });
      console.log('IdleDetector is active.');
      
      window.setTimeout(() => {
        controller.abort();
        console.log('IdleDetector is stopped.');
      }, 10000);
    } catch (err) {
      // Deal with initialization errors like permission denied,
      // running outside of top-level frame, etc.
      console.error(err.name, err.message);
    }
  };
  
  main();