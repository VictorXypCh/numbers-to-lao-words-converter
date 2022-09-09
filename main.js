const base = {
  1: "ໜຶ່ງ",
  2: "ສອງ",
  3: "ສາມ",
  4: "ສີ່",
  5: "ຫ້າ",
  6: "ຫົກ",
  7: "ເຈັດ",
  8: "ແປດ",
  9: "ເກົ້າ",
  10: "ສິບ",
  20: "ຊາວ",
};

const getLength = (number) => {
  return number.toString().length;
};

const tenUnit = (number) => {
  let laoWord = "";
  if (number[0] == 1 || number[0] == 2) {
    let prop = number[0] + "0";
    laoWord += base[prop];
  } else {
    laoWord += base[number[0]] + "ສິບ";
  }

  if (number[1] == 1) {
    laoWord += "ເອັດ";
  } else if (number[1] != 0) {
    laoWord += base[number[1]];
  }

  return laoWord;
};

 const getLaoNumber = (number) => {
  let laoWord = "";

  let processNum = parseInt(number.toString()).toString();
  let len = getLength(processNum);
  while (len) {
    if (len >= 7 && parseInt(processNum[0]) !== 0) {
      laoWord +=
        getLaoNumber(processNum.toString().substring(0, len - 6)) + "ລ້ານ";
      processNum = processNum.toString().substring(len - 7);
      len = getLength(processNum);
    } else if (len === 6 && parseInt(processNum[0]) !== 0) {
      laoWord += base[parseInt(processNum[0])] + "ແສນ";
    } else if (len === 5 && parseInt(processNum[0]) !== 0) {
      laoWord += tenUnit(processNum) + "ພັນ";
      processNum = processNum.substring(1);
    } else if (len === 4 && parseInt(processNum[0]) !== 0) {
      laoWord += base[parseInt(processNum[0])] + "ພັນ";
    } else if (len === 3 && parseInt(processNum[0]) !== 0) {
      laoWord += base[parseInt(processNum[0])] + "ຮ້ອຍ";
    } else if (len === 2 && parseInt(processNum[0]) !== 0) {
      laoWord += tenUnit(processNum);
      processNum = processNum.substring(1);
    } else if (len === 1 && parseInt(processNum) !== 0) {
      laoWord += base[processNum];
    }

    processNum = processNum.substring(1);
    len = getLength(processNum);
  }

  return laoWord;
};
