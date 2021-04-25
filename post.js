const express = require("express");
const router = express.Router();

router.post("/analyze", (req, res) => {
  var str = req.body.text;
  let countwithspace = str.split("").length;
  let countwithoutspace = str.replace(/\s/g, "").split("").length;

  str = str.trim();
  str = str.replace(/[ ]{2,}/gi, " ");

  function wordLength(str) {
    let count = 0;
    if (str == "") {
      return count;
    } else {
      count = str.split(" ").length;
      return count;
    }
  }

  var wordlength = wordLength(str);

  str = str.toLowerCase();

  str = str
    .replace(/\d+|[!@#$%^&*.,]|[ ]{1,}/gi, "")
    .split("")
    .sort();

  function counter(str) {
    let count = {};
    str.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    return count;
  }
  var count = counter(str);

  const arrayOfObj = Object.entries(count).map((e) => ({ [e[0]]: e[1] }));

  res.json({
    textLength: {
      withSpaces: countwithspace,
      withoutSpaces: countwithoutspace,
    },
    wordCount: wordlength,
    characterCount: arrayOfObj,
  });
});

module.exports = router;
