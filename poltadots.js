const art = `              ,   ,-',
        ,', ,'  ','  ,'   ÅÑGË£ÏÇÄ †(–)Ë ßRÄ†
      '-',  '      ,'
          ' -,    ',
              ' -, ',                                         , - - -,
             ('''''' ®'''''''')                       ,,,,,    ,-' -,''''''''',
              \` ~„''\`„~ '                          ',  ,', -' , -,'' ''''''''',
                  "„  " - „                   „ - ",®,-'     \`~~' '''''''
                 „"         " „         „ - "      ,',,,',
               „-" " " " " " " ~~~~~~" - „       ,'
            „" –,'' ~ ,       • ; •          "      "„
            """";      ' - , ,  ; , , , - '' ' ' -,_ ', ',
           , -' ' ',           ,'    ,'             ',~', ',
         ,'         ' - , ,()' /\\    ',          (),'¯ ,'   \`¸\`;
         ',                            \` \` \` \` \` \`      ,-,,,-'
           '-,                                  ,¬  ,-'
              ' -, ~            ~~~~~~' ' \` ,-'
                  \`~-,,,,,,,      ,,,,,,,,,,-~'
      ('('('(,,,              ;    ;                •Å(V)åö•
       '-, '-,'''      ,-';\`,\`'ˆˆˆˆˆ ,' ;' ' -,           •97•
         ;¯ ;      ;  ;  ', ; ; ,'  ;  ‚¸  ' -,        •••
         ;   ;     ;       '''''''''''    \`\`'-,',  ,'
         ;   ;, -¬;    O   O   O  O   '-',,,,,,,,,,,,
         ;        ;  O   O     O O    O  ,'     O     ,'
          ' - - ' \`;    O        O  O    O   O    ,'
               ,-'   O    O    O  O      O    O   ,'
            ,-' O O  O   O        O        O ,'
         ,-'   O      O   O   O     O  O     ,'
      ,-'  O    O    O  O   O   O O O   O,-'-,
       \`\`¬ -,,,,,,,-¬~,~~~~~~~~~--',)  (' -,
                    ',   (',                     ' -,    '-,
                     ',)  (',                        \`-,)  ' -,
                      ',    ',                           \`-,  ,',-----,
                       ',)   ;                              \`\\,- ---'
                   ¸,,,,'‡  (;
                  (¸,,,,,';_'\\ ßy §(V)òó†(–)775 ™`;
 
function computePolkadotScore(asciiArt) {
  const lines = asciiArt.split("\n");
 
  // Characters that cannot appear in lips or pupils (per problem statement)
  const EXCLUDED = new Set(["'", "`", ",", "-", " "]);
 
  // Pupils
  const pupilsLineIdx = lines.findIndex(line => /•\s*;\s*•/.test(line));
  if (pupilsLineIdx === -1) throw new Error("Could not find Angelica's pupils.");
  const pupilsLine = lines[pupilsLineIdx];
  const firstPupilX = pupilsLine.indexOf("•");
  const lastPupilX  = pupilsLine.lastIndexOf("•");
  const pupilCharCount = [...pupilsLine.slice(firstPupilX, lastPupilX + 1)]
    .filter(ch => !EXCLUDED.has(ch))
    .length; 
  // Lips
  const lipsLineIdx = lines.findIndex(l => l.includes('""""'));
  if (lipsLineIdx === -1) throw new Error("Could not find Angelica's lips.");
  const lipsLine = lines[lipsLineIdx];
  const underscoreIdx = lipsLine.indexOf("_");
  const searchEnd = underscoreIdx === -1 ? lipsLine.length : underscoreIdx;
  const lipXs = [];
  for (let x = 0; x < searchEnd; x++) {
    if (!EXCLUDED.has(lipsLine[x])) lipXs.push(x);
  }
  if (lipXs.length === 0) throw new Error("No lip characters found.");
  const lipsStartX = lipXs[0];               
  const lipsEndX   = lipXs[lipXs.length - 1]; 
 
  // 3. Count polkadots (O) on the dress
  let inside = 0, outside = 0;
  for (let y = lipsLineIdx + 1; y < lines.length; y++) {
    const line = lines[y];
    for (let x = 0; x < line.length; x++) {
      if (line[x] !== "O") continue;
      if (x >= lipsStartX && x <= lipsEndX) {
        inside++;
      } else {
        outside++;
      }
    }
  }

  return outside + inside * pupilCharCount;
}
 
console.log(computePolkadotScore(art)); 

// PS - Why make life so much harder?  Just give a leet code question please  :))) - Y!