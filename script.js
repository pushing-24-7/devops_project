document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+{}[]<>?/|";

  let charSet = "";
  if (includeUppercase) charSet += uppercaseChars;
  if (includeLowercase) charSet += lowercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSymbols) charSet += symbolChars;

  if (charSet === "") {
    document.getElementById("password").value = "⚠️ Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randIndex];
  }

  document.getElementById("password").value = password;
});
