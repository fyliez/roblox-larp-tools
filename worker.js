self.onmessage = function(e) {
    try {
        const canvas = e.data.canvas;
        const width = e.data.width;
        const height = e.data.height;
        
        const ctx = canvas.getContext('2d');
        
        // OOB read/write simulation
        const imgData = ctx.getImageData(0, 0, width + 100, height + 100);
        ctx.putImageData(imgData, -50, -50);
        
        self.postMessage('corrupted');
    } catch(err) {
        self.postMessage('error: ' + err.message);
    }
};
