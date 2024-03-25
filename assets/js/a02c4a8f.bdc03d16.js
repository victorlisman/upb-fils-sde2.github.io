"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3544],{8124:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=n(7624),r=n(2172);const t={sidebar_position:4,description:"Utiliser des descripterus de fichers, dup2, fork et exec et le type Box"},l="TP 04 - Processus et le type Box",o={id:"tp/04",title:"TP 04 - Processus et le type Box",description:"Utiliser des descripterus de fichers, dup2, fork et exec et le type Box",source:"@site/docs/tp/04.md",sourceDirName:"tp",slug:"/tp/04",permalink:"/docs/tp/04",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/docs/tp/04.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Utiliser des descripterus de fichers, dup2, fork et exec et le type Box"},sidebar:"tutorialSidebar",previous:{title:"TP 03 - Systems de fichiers et le type Result",permalink:"/docs/tp/03"},next:{title:"TP 05 - Fichiers et descripteurs de fichiers",permalink:"/docs/tp/05"}},u={},d=[{value:"Resources",id:"resources",level:2},{value:"Le type Box",id:"le-type-box",level:2},{value:"Pointeurs",id:"pointeurs",level:3},{value:"<code>Box&lt;T&gt;</code>",id:"boxt",level:3},{value:"Processus",id:"processus",level:2},{value:"Identifier un processus",id:"identifier-un-processus",level:3},{value:"Fork",id:"fork",level:3},{value:"Fonctions Unix",id:"fonctions-unix",level:2},{value:"Les appels syst\xe8me dup et dup2",id:"les-appels-syst\xe8me-dup-et-dup2",level:3},{value:"dup",id:"dup",level:4},{value:"dup2",id:"dup2",level:4},{value:"execvp()",id:"execvp",level:3},{value:"waitpid()",id:"waitpid",level:3},{value:"Sugestions",id:"sugestions",level:2},{value:"Exercises",id:"exercises",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"tp-04---processus-et-le-type-box",children:"TP 04 - Processus et le type Box"}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://jimskapt.github.io/rust-book-fr/ch04-00-understanding-ownership.html",children:"Comprendre la possession"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.a,{href:"https://jimskapt.github.io/rust-book-fr/ch15-01-box.html",children:["Utiliser ",(0,i.jsx)(s.code,{children:"Box<T>"})," pour pointer sur des donn\xe9es pr\xe9sentes sur le tas"]})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.fork.html",children:"fork"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/index.html",children:"fonctions Unix"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://doc.rust-lang.org/std/fs/struct.OpenOptions.html",children:"OpenOptions"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"le-type-box",children:"Le type Box"}),"\n",(0,i.jsx)(s.h3,{id:"pointeurs",children:"Pointeurs"}),"\n",(0,i.jsxs)(s.p,{children:["Un ",(0,i.jsx)(s.strong,{children:"pointeur"})," est un concept g\xe9n\xe9ral pour une variable qui contient une adresse en m\xe9moire. Cette adresse fait r\xe9f\xe9rence \xe0, ou \u201cpointe vers\u201d, d'autres donn\xe9es. Le type de pointeur le plus courant dans Rust est une ",(0,i.jsx)(s.strong,{children:"r\xe9f\xe9rence"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Les r\xe9f\xe9rences sont indiqu\xe9es par le symbole ",(0,i.jsx)(s.code,{children:"&"})," et empruntent la valeur vers laquelle elles pointent. Ils n'ont pas de capacit\xe9s sp\xe9ciales autres que la r\xe9f\xe9rence aux donn\xe9es et n'ont pas de surcharge."]}),"\n",(0,i.jsxs)(s.p,{children:["Les ",(0,i.jsx)(s.strong,{children:"smart pointers"}),", d'autre part, sont des structures de donn\xe9es qui agissent comme un pointeur mais qui ont \xe9galement des m\xe9tadonn\xe9es et des capacit\xe9s suppl\xe9mentaires. Le concept de smart pointer n'est pas propre \xe0 Rust : les pointeurs intelligents sont originaires de C++ et existent \xe9galement dans d'autres langages."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Rust, avec son concept de propri\xe9t\xe9 et d'emprunt, a une diff\xe9rence suppl\xe9mentaire entre les r\xe9f\xe9rences et les pointeurs intelligents : alors que les r\xe9f\xe9rences ",(0,i.jsx)(s.strong,{children:"n'empruntent que des donn\xe9es"}),", dans de nombreux cas, les smart pointers ",(0,i.jsx)(s.strong,{children:"poss\xe8dent"})," les donn\xe9es vers lesquelles ils pointent."]})}),"\n",(0,i.jsx)(s.h3,{id:"boxt",children:(0,i.jsx)(s.code,{children:"Box<T>"})}),"\n",(0,i.jsxs)(s.p,{children:["Le smart pointer le plus simple est une ",(0,i.jsx)(s.code,{children:"box"}),", dont le type est \xe9crit ",(0,i.jsx)(s.code,{children:"Box<T>"}),". Les boxes vous permettent de stocker des donn\xe9es sur le tas plut\xf4t que sur la ",(0,i.jsx)(s.strong,{children:"pile"}),". Ce qui reste sur la pile est le pointeur vers les donn\xe9es du ",(0,i.jsx)(s.strong,{children:"tas"})," ."]}),"\n",(0,i.jsx)(s.p,{children:"Les boxes n'ont pas de surcharge de performances, \xe0 part le stockage de leurs donn\xe9es sur le tas plut\xf4t que sur la pile. Mais ils n'ont pas beaucoup de capacit\xe9s suppl\xe9mentaires non plus. Vous les utiliserez le plus souvent dans ces situations :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Lorsque vous avez un type dont la taille ne peut pas \xeatre connue au moment de la compilation et que vous souhaitez utiliser une valeur de ce type dans un contexte qui n\xe9cessite une taille exacte"}),"\n",(0,i.jsx)(s.li,{children:"Lorsque vous avez une grande quantit\xe9 de donn\xe9es et que vous souhaitez transf\xe9rer la propri\xe9t\xe9, mais assurez-vous que les donn\xe9es ne seront pas copi\xe9es lorsque vous le ferez"}),"\n",(0,i.jsx)(s.li,{children:"Lorsque vous voulez poss\xe9der une valeur et que vous vous souciez seulement qu'il s'agisse d'un type qui impl\xe9mente un trait particulier plut\xf4t que d'\xeatre d'un type sp\xe9cifique"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:'fn main() {\n    let b = Box::new(5);\n    println!("b = {}", b);\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Nous d\xe9finissons la variable b comme ayant la valeur d'une ",(0,i.jsx)(s.code,{children:"Box"})," qui pointe vers la valeur 5, qui est allou\xe9e sur le ",(0,i.jsx)(s.strong,{children:"tas"}),". Ce programme imprimera ",(0,i.jsx)(s.code,{children:"b = 5"}),"; dans ce cas, nous pouvons acc\xe9der aux donn\xe9es dans la bo\xeete de la m\xeame mani\xe8re que nous le ferions si ces donn\xe9es \xe9taient sur la ",(0,i.jsx)(s.strong,{children:"pile"}),". Comme toute valeur poss\xe9d\xe9e, lorsqu'une bo\xeete sort de la port\xe9e, comme le fait b \xe0 la fin de main, elle sera d\xe9sallou\xe9e. La d\xe9sallocation se produit \xe0 la fois pour la bo\xeete (stock\xe9e sur la pile) et les donn\xe9es vers lesquelles elle pointe (stock\xe9es sur le tas)."]}),"\n",(0,i.jsx)(s.h2,{id:"processus",children:"Processus"}),"\n",(0,i.jsxs)(s.p,{children:["Lancer une application signifie allouer des ressources syst\xe8me (processeur, m\xe9moire, p\xe9riph\xe9riques d'entr\xe9e / sortie) pour ex\xe9cuter l'application. Une application qui s'ex\xe9cute, c'est-\xe0-dire utilise des ressources syst\xe8me pour ex\xe9cuter du code et traiter des donn\xe9es, est appel\xe9e un ",(0,i.jsx)(s.strong,{children:"processus"}),". Lorsque nous d\xe9marrons une application, un processus est cr\xe9\xe9; lorsque nous arr\xeatons l'application, ou lorsqu'elle termine son ex\xe9cution, nous entendons la fin de l'ex\xe9cution du processus."]}),"\n",(0,i.jsxs)(s.p,{children:["Le processus d\xe9marre \xe0 partir d'un fichier ex\xe9cutable contenant le code de l'application (instructions) et les donn\xe9es. Le fichier ex\xe9cutable est \xe9galement appel\xe9 ",(0,i.jsx)(s.strong,{children:"image du processus"})," . Le fichier ex\xe9cutable est un programme. Nous disons que le processus est un programme en cours d'ex\xe9cution."]}),"\n",(0,i.jsx)(s.h3,{id:"identifier-un-processus",children:"Identifier un processus"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"PID"})," ( Process Id ) est l'attribut essentiel du processus, un index qui identifie le processus au niveau du syst\xe8me. Un processus est identifi\xe9 par ",(0,i.jsx)(s.code,{children:"PID"})," et non par nom d'ex\xe9cutable (CMD). Nous pouvons cr\xe9er plusieurs processus \xe0 partir du m\xeame ex\xe9cutable, chaque processus ayant son propre ",(0,i.jsx)(s.code,{children:"PID"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"fork",children:"Fork"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:"fork()"})," cr\xe9e un nouveau processus enfant dupliquant le processus parent. Apr\xe8s avoir appel\xe9 l'appel syst\xe8me fork (avec succ\xe8s), deux processus seront cr\xe9\xe9s qui sont identiques \xe0 l'exception de leur pid et de la valeur de retour de cette fonction."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:'use nix::sys::wait::waitpid;\nuse nix::unistd::{fork, ForkResult, write};\n \nmatch unsafe{fork()} {\n   Ok(ForkResult::Parent { child }) => {\n       println!("Continuing execution in parent process, new child has pid: {}", child);\n       waitpid(child, None).unwrap();\n   }\n   Ok(ForkResult::Child) => {\n       write(libc::STDOUT_FILENO, "I\'m a new child process\\n".as_bytes()).ok();\n       unsafe { libc::_exit(0) };\n   }\n   Err(_) => println!("Fork failed"),\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"fonctions-unix",children:"Fonctions Unix"}),"\n",(0,i.jsx)(s.h3,{id:"les-appels-syst\xe8me-dup-et-dup2",children:"Les appels syst\xe8me dup et dup2"}),"\n",(0,i.jsx)(s.h4,{id:"dup",children:"dup"}),"\n",(0,i.jsxs)(s.p,{children:["L'appel syst\xe8me ",(0,i.jsx)(s.code,{children:"dup()"})," cr\xe9e une ",(0,i.jsx)(s.strong,{children:"copie"})," d'un descripteur de fichier."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Il utilise le descripteur inutilis\xe9 portant le num\xe9ro le plus bas pour le nouveau descripteur."}),"\n",(0,i.jsx)(s.li,{children:"Si la copie est cr\xe9\xe9e avec succ\xe8s, les descripteurs de fichier d'origine et de copie peuvent \xeatre utilis\xe9s de mani\xe8re interchangeable."}),"\n",(0,i.jsx)(s.li,{children:"Ils se r\xe9f\xe8rent tous les deux au m\xeame descripteur de fichier ouvert et partagent donc les indicateurs de d\xe9calage de fichier et d'\xe9tat de fichier."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"dup2",children:"dup2"}),"\n",(0,i.jsxs)(s.p,{children:["L'appel syst\xe8me ",(0,i.jsx)(s.code,{children:"dup2()"})," est similaire \xe0 ",(0,i.jsx)(s.code,{children:"dup()"})," mais la diff\xe9rence fondamentale entre eux est qu'au lieu d'utiliser le descripteur de fichier inutilis\xe9 portant le num\xe9ro le plus bas, il utilise le num\xe9ro de descripteur ",(0,i.jsx)(s.strong,{children:"sp\xe9cifi\xe9 par l'utilisateur"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Lors de l'appel de ",(0,i.jsx)(s.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.dup2.html",children:"dup2"})," dans Rust, les param\xe8tres donn\xe9s doivent \xeatre l'ancien descripteur de fichier et le nouveau."]})}),"\n",(0,i.jsx)(s.h3,{id:"execvp",children:"execvp()"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:"execvp()"})," ",(0,i.jsx)(s.strong,{children:"remplace"})," l'image de processus actuelle par une nouvelle image de processus sp\xe9cifi\xe9e par le fichier. La nouvelle image est construite \xe0 partir d'un ",(0,i.jsx)(s.strong,{children:"fichier ex\xe9cutable"})," standard appel\xe9 le nouveau fichier d'image de processus. Aucun retour n'est effectu\xe9 car l'image de processus appelante est remplac\xe9e par la nouvelle image de processus."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Ici, vous pouvez lire comment ",(0,i.jsx)(s.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.execvp.html",children:"execvp"})," est utilis\xe9 dans la Rust."]})}),"\n",(0,i.jsx)(s.h3,{id:"waitpid",children:"waitpid()"}),"\n",(0,i.jsxs)(s.p,{children:["L'appel syst\xe8me ",(0,i.jsx)(s.code,{children:"waitpid()"})," ",(0,i.jsx)(s.strong,{children:"suspend"})," l'ex\xe9cution du processus appelant jusqu'\xe0 ce qu'un enfant sp\xe9cifi\xe9 par l'argument pid ait chang\xe9 d'\xe9tat. Par d\xe9faut, ",(0,i.jsx)(s.code,{children:"waitpid()"})," attend uniquement les enfants termin\xe9s, mais ce comportement est modifiable via l'argument options, comme d\xe9crit ci-dessous."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Details sur ",(0,i.jsx)(s.a,{href:"https://docs.rs/nix/0.23.1/nix/sys/wait/fn.waitpid.html",children:"waitpid"})," en Rust."]})}),"\n",(0,i.jsx)(s.h2,{id:"sugestions",children:"Sugestions"}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Transformer un String en CString peut \xeatre fait en utilisant:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:'CString::new("ls").unwrap()\n'})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:"// utilis\xe9 pour trouver le descripteur de fichier \nuse std::os::unix::io::AsRawFd;\n"})})}),"\n",(0,i.jsx)(s.h3,{id:"exercises",children:"Exercises"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Cr\xe9er un programme de sorte que le contenu d'un fichier qui est re\xe7u comme premier argument soit ",(0,i.jsx)(s.strong,{children:"redirig\xe9e vers un fichier"})," re\xe7u en tant que deuxi\xe8me argument - une fonctionnalit\xe9 similaire \xe0 l'utilitaire ",(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/cp-command-linux-examples/",children:"cp"})," de Linux."]}),"\n",(0,i.jsx)(s.li,{children:"\xc9crivez un programme qui alloue dynamiquement un String \xe0 l'aide de Box. Lisez un texte depuis le clavier et ajoutez-le \xe0 la String allou\xe9e. Imprimez le String."}),"\n",(0,i.jsx)(s.li,{children:"Cr\xe9ez un programme qui utilise fork pour cr\xe9er un processus enfant.\na. dans le processus parent, imprimez son PID (des parents) et le PID de l'enfant. Dans le processus enfant, imprimez le PID du parent et son PID.\nb. Dans le processus enfant, attendez quelques secondes et imprimez ensuite un message.\nc. Dans le processus parent, affichez \u201cEn attente de la sortie du processus enfant\u201d, attendez qu'il se termine (waitpid) et imprimez un message avant de quitter."}),"\n",(0,i.jsxs)(s.li,{children:["Dans le processus enfant, ex\xe9cutez la commande ",(0,i.jsx)(s.code,{children:"ls -l"}),". Utilisez ",(0,i.jsx)(s.code,{children:"execvp"}),". Le premier argument doit \xeatre identique \xe0 la commande."]}),"\n",(0,i.jsxs)(s.li,{children:["Redirigez la sortie du processus enfant (fd 1) vers un fichier appel\xe9 ",(0,i.jsx)(s.code,{children:"output.txt"}),". Ouvrez le fichier en \xe9criture et utilisez ",(0,i.jsx)(s.code,{children:"dup2"}),".\na. N'\xe9crasez pas le fichier ",(0,i.jsx)(s.code,{children:"output.txt"}),", ajoutez-y des donn\xe9es (",(0,i.jsx)(s.code,{children:"fs :: OpenOptions"}),")"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>l});var i=n(1504);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);