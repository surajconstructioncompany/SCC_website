import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const publicDir = path.resolve("public/Home");

async function processImage(fileName) {
  const inputPath = path.join(publicDir, fileName);
  const ext = path.extname(fileName);
  // handle double extensions like .png.png
  let baseName = path.basename(fileName, ext);
  if (baseName.endsWith(".png")) {
    baseName = baseName.slice(0, -4);
  }

  const outputPath = path.join(publicDir, `${baseName}.webp`);

  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`Converted ${fileName} to ${baseName}.webp`);
  } catch (err) {
    console.error(`Error processing ${fileName}:`, err);
  }
}

async function main() {
  const files = await fs.readdir(publicDir);
  for (const file of files) {
    if (file.endsWith(".png") || file.endsWith(".jpg")) {
      // Only process the large files
      if (file.includes("mumbai_bridge") || file.includes("results")) {
        await processImage(file);
      }
    }
  }

  const rootLogos = ["dark_logo.png", "light_logo.png"];
  for (const logo of rootLogos) {
    const inputPath = path.resolve("public", logo);
    const baseName = logo.replace(".png", "");
    const outputPath = path.resolve("public", `${baseName}.webp`);
    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      console.log(`Converted ${logo} to ${baseName}.webp`);
    } catch (err) {
      console.log(`Skipped ${logo}`);
    }
  }
}

main();
