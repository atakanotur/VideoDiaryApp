import { File, Directory, Paths } from 'expo-file-system';

export const saveVideoToAppStorage = (uri: string): string => {
  const videosDir = new Directory(Paths.document, 'videos');
  if (!videosDir.exists) {
    videosDir.create();
  }

  const trimmedFile = new File(uri);
  const fileName = `video_${Date.now()}.mp4`;
  const finalFile = new File(videosDir, fileName);

  trimmedFile.copy(finalFile);

  if (trimmedFile.exists && trimmedFile.uri !== finalFile.uri) {
    trimmedFile.delete();
  }

  return fileName;
};

// Bunu yaptım çünkü expo-video-trimmer'de hata veriyor.

// [Error: Uncaught (in promise, id: 0) Error: Calling the 'copyAsync' function has failed
//   → Caused by: File '/Users/atakanotur/Library/Developer/CoreSimulator/Devices/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx/data/Containers/Data/Application/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx/Documents/trimmed_videos/trimmed_video_1764508990427.mp4' is not readable] 
  
//   Code: construct.js
//     2 | var setPrototypeOf = require("./setPrototypeOf.js");
//     3 | function _construct(t, e, r) {
//   > 4 |   if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
//       |                                                                 ^
//     5 |   var o = [null];
//     6 |   o.push.apply(o, e);
//     7 |   var p = new (t.bind.apply(t, o))();
//   Call Stack
