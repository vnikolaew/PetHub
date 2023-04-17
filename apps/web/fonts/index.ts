import {
   Dancing_Script,
   Comfortaa,
   Cinzel,
   Roboto_Slab,
   Bona_Nova,
   Caveat,
   Ubuntu_Mono,
} from "@next/font/google";

const dancingScript = Dancing_Script({
   weight: ["400", "500"],
   subsets: ["latin"],
});

const comfortaa = Comfortaa({
   weight: ["400", "500"],
   subsets: ["latin"],
});

const cinzel = Cinzel({
   weight: ["400", "500"],
   subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
   weight: ["400", "500"],
   subsets: ["latin"],
});

const caveat = Caveat({
   weight: ["400", "500"],
   subsets: ["latin"],
});

const bonaNova = Bona_Nova({
   weight: ["400", "700"],
   subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
   weight: ["400", "700"],
   subsets: ["latin"],
});

export {
   caveat,
   cinzel,
   bonaNova,
   ubuntuMono,
   robotoSlab,
   dancingScript,
   comfortaa,
};
