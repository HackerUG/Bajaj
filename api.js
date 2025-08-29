function alternateCapsReverse(str) {
  const arr = String(str).split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i % 2 === 0 ? arr[i].toUpperCase() : arr[i].toLowerCase();
  }
  return arr.join("");
}

function isIntegerString(s) {
  return /^-?\d+$/.test(s);
}

module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ is_success: false, message: "Method Not Allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const data = body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input. 'data' must be an array." });
    }

const FULL_NAME = "utkarsh_goel_01072004";
const DOB = "01072004";
const EMAIL = "utkarsh.22bce8328@vitapstudent.ac.in";
const ROLL_NUMBER = "22BCE8328";

    const user_id = `${FULL_NAME.toLowerCase().replace(/\s+/g, "_")}_${DOB}`;

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let concatChars = "";

    for (const item of data) {
      const s = String(item).trim();

      if (isIntegerString(s)) {
        const n = parseInt(s, 10);
        if (Math.abs(n) % 2 === 0) {
          even_numbers.push(s);  
        } else {
          odd_numbers.push(s);
        }
        sum += n;
      } else if (/^[a-zA-Z]+$/.test(s)) {
        alphabets.push(s.toUpperCase());
        concatChars += s;         
      } else {
        special_characters.push(s);
      }
    }

    return res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string: alternateCapsReverse(concatChars)
    });
  } catch (err) {
    return res.status(500).json({ is_success: false, message: "Server error", error: String(err?.message || err) });
  }
};
