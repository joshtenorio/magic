import * as fs from "fs";

function generateCacheName(setCode: string, setNumber: string) {
  return "./data/" + setCode + "-" + setNumber + ".json";
}
export function writeCache(setCode: string, setNumber: string, cardData: any) {
  const filename = generateCacheName(setCode, setNumber);
  const data = JSON.stringify(cardData);
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log(`Successfully wrote JSON object to ${filename}`);
  });
}

export function readCache(setCode: string, setNumber: string): Promise<any> {
  const filename = generateCacheName(setCode, setNumber);
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const jsonObject = JSON.parse(data);
        resolve(jsonObject);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}
