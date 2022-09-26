export async function postMail(name, email, text) {
  const res = await fetch('api/sendMail', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      text: text,
    }),
  });
  return res;
}

export async function sendGoogleTable(user) {
  const res = await fetch('api/google-sheet-service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
  return res.json();
}
