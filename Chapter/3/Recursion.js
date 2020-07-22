function isEven(number) {
    function find(even, odd) {
      if (even == number) {
        return true;
      } else if (odd == number) {
        return false;
    }
      else if (number % 2 == 0) {
      return true;
    }
      else if (number % 2 != 0) {
        return false;
      }
    }
    {
    return find(0,1);
    }
  }