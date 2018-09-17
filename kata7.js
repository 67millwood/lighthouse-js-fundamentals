

makeCase = function(text, maker) {
    if (maker === "camel") {
      var splitter = text.split(" ");
      for (i = 1; i < splitter.length; i++) {
        splitter[i] = splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1);

      } console.log(splitter.join(""));
    }
    else if (maker === "pascal") {
      var splitter = text.split(" ");
      for (i = 0; i < splitter.length; i++) {
        splitter[i] = splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1);

      } console.log(splitter.join(""));
    }
    else if (maker === "snake") {
      var splitter = text.split(" ");
      console.log(splitter.join("_"));

    }
    else if (maker === "kebab") {
      var splitter = text.split(" ");
      console.log(splitter.join("-"));
    }
    else if (maker === "title") {
      var splitter = text.split(" ");
      for (i = 0; i < splitter.length; i++) {
        splitter[i] = splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1);

      } console.log(splitter.join(" "));
    }
    else if (maker === "vowel") {
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      for (i = 0; i <= text.length; i++) {
        for (a = 0; a < vowels.length; a++) {
          if (text[i] === vowels[a]) {
            text = text.replace(text.charAt(i), text.charAt(i).toUpperCase());
          }
          else {

          }
        }
       } console.log(text);
      }
    else if (maker === "consonant") {
      var vowels = ['A', 'E', 'I', 'O', 'U'];
      text = text.toUpperCase();
      for (i = 0; i <= text.length; i++) {
        for (a = 0; a < vowels.length; a++) {
          if (text[i] === vowels[a]) {
            text = text.replace(text.charAt(i), text.charAt(i).toLowerCase());
          }
          else {
          }
        }
       } console.log(text);
         console.log("what?");
      }
    else if (maker[0] === "upper" && maker[1] === "snake") {
      text = text.toUpperCase();
      var splitter = text.split(" ");
      console.log(splitter.join("_"));

    }


 }



makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";
