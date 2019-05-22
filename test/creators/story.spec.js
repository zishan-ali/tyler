import mockfs from "mock-fs";
import fs from "fs";
import { createStory } from "../../src/creators";
import { storyFixture, storyIndexFixture } from "../../src/fixtures";

describe(".createStory/2", async () => {
  const parentPath = "./src/foo-bar";

  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it("creates an `index` and `Default` file in the given directory", done => {
    createStory(parentPath, {}).then(() => {
      expect(
        fs.readFileSync(`${parentPath}/story/index.js`, { encoding: "utf8" })
      ).toEqual(storyIndexFixture);
      expect(
        fs.readFileSync(`${parentPath}/story/Default.jsx`, { encoding: "utf8" })
      ).toEqual(storyFixture);
      done();
    });
  });
});
