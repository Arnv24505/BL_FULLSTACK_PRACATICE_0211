const myModule = (function() {
  let secret = "Top Secret Value";

  function privateMethod() {
    console.log("This is private");
  }

  function publicMethod() {
    console.log("This is public");
  }

  function getSecret() {
    return secret;
  }

  return {
    publicMethod,
    getSecret
  };
})();

myModule.publicMethod();
console.log(myModule.getSecret());
