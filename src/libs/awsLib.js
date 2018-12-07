import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  //var vaultti = "eu-central-1:dc380b0e-f5c0-4959-825b-770e020702c9";

  const filename = `${Date.now()}-${file.name}`;
  const stored = await Storage.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}