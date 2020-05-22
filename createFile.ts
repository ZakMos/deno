const encoder = new TextEncoder();

const greetText = encoder.encode("hello World \n My name is Zak");

await Deno.writeFile("greet.txt", greetText);