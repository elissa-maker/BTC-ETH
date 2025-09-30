async function fetchCodes() {
  try {
    const response = await fetch('codes.json');
    if (!response.ok) throw new Error('Unable to load codes');
    return await response.json();
  } catch (err) {
    document.getElementById('errorMsg').textContent = 'Error loading codes, try again later.';
    throw err;
  }
}

async function enterBot() {
  const codeInput = document.getElementById('codeInput').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  errorMsg.textContent = '';

  if (!codeInput) {
    errorMsg.textContent = 'Please enter a code.';
    return;
  }

  let codes;
  try {
    codes = await fetchCodes();
  } catch {
    return;
  }

  if (codes.includes(codeInput)) {
    sessionStorage.setItem('botCode', codeInput);
    window.location.href = 'bot.html';
  } else {
    errorMsg.textContent = 'Invalid code. Please try again.';
  }
}
