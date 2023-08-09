function humanReadable (seconds) {
    const digits = []
    digits[0] = Math.floor(seconds/3600);
    digits[1] = Math.floor((seconds%3600) / 60);
    digits[2] = ((seconds%3600) % 60) %60;
    for(let i = 0; i < 3; i++){
      if (digits[i]/10 < 1){
        digits[i] = '0'+ digits[i];
      }
    }
    return digits.join(':');
  }