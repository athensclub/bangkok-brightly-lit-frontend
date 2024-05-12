export async function getCurrentStatus() {
  const response = await fetch(
    "https://iuvf2ngq8i.execute-api.ap-south-1.amazonaws.com/prod/getCurrentStatus",
    {
      method: "GET",
    }
  );
  return await response.json();
}

export async function getAlert() {
  const response = await fetch(
    "https://iuvf2ngq8i.execute-api.ap-south-1.amazonaws.com/prod/alert",
    {
      method: "GET",
    }
  );
  return await response.json();
}

export async function getSpecifyStatus(date) {
  let str = JSON.stringify(date);
  while(str.indexOf('"') >= 0) str = str.replace('"', '');
  const url =
    "https://iuvf2ngq8i.execute-api.ap-south-1.amazonaws.com/prod/getSpecifyStatus/" + str;
  const response = await fetch(url, {
    method: "GET",
  });
  return await response.json();
}
