export type ContentBlock =
  | { type: "paragraph"; value: string }
  | { type: "heading"; value: string }
  | { type: "code"; value: string; lang?: string }
  | { type: "list"; ordered?: boolean; items: string[] };

export type Post = {
  slug: string;
  date: string;
  title: string;
  subtitle?: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "learn-the-shape-of-your-data",
    date: "2026-05-19",
    title: "Learn the Shape of Your Data",
    subtitle: "Why understanding data structures is more important than algorithms",
    content: [
      {
        type: "paragraph",
        value:
          "Most programming tutorials start in the same place: variables, loops, functions, modules, package managers, then a tiny CLI or todo app, and that is fine if the goal is to get someone to print something on the screen. But if the goal is to really understand a language, especially Rust, Go, Zig, C, C++, or even Swift, syntax is not the thing you should be optimizing for first.",
      },
      {
        type: "paragraph",
        value:
          "If I could go back and teach myself again, I would start with one question: what does this value actually look like in memory? Not in a scary compiler-engineer way. Just enough to know what it is, where it lives, what is a pointer, what allocates, what gets copied, what frees, who owns the memory, and who that memory goes away.",
      },
      {
        type: "paragraph",
        value:
          "A little about my background. I started coding, I would not even call it programming then, when I was around 12 or 13. I was reading Java-based Nokia apps like 2go, building HTML/JavaScript pages and forums on platforms like wapka.mobi and zedwap, also writing small `py` scripts and doing web stuff, all for fun in high school, never thinking it would become my actual work because I wanted to be an architect. WOOOD.",
      },
      {
        type: "paragraph",
        value:
          "After high school, I tried to learn programming properly through online courses, PDFs, YouTube videos. The usual route, and I could write toggle, run it, and feel happy when it worked, but I did not really understand what was happening under the hood until I was about to learn Rust. It was hard for me so I stopped trying to memorize language rules and started asking better questions like, how does the computer execute my program? What does my English-looking code become? Where does the code live? What does the runtime do for me?",
      },
      {
        type: "paragraph",
        value:
          "Those questions led me into a big research arc and I started reading books like, Introduction to Computer Organization, Introduction to Computer Systems: Pirahesh & Gatlin to C/C++ & Beyond, Hacker's Delight, Thinking Low Level, Writing High Level, ARM assembly, compiler books like Writing A C Compiler and Modern Compiler Implementation in C, plus a lot of blogs, PDFs, and Reddit threads. After writing a lot of C and core mostly amount of ARM assembly, I picked up Rust again and suddenly things started clicking and I didn't need to stress my brain or think too much since I now have the right mental model. I can keep relying more on this but I don't want this article to get longer than I want it to be so I'll stop now.",
      },
      {
        type: "paragraph",
        value:
          "Fun fact: during high school, I did most of that modding and web stuff on a Nokia Symbian and Nokia Asha 305. It was really fun th.",
      },
      {
        type: "paragraph",
        value:
          "I do not need every beginner needs to read a compiler book before writing Hello World instead. I mean the basic questions that explain why the language behaves the way it behaves:",
      },
      {
        type: "list",
        items: [
          "What does this value look like in memory?",
          "What lives online?",
          "What is just a pointer?",
          "What allocates?",
          "What gets copied?",
          "What gets moved?",
          "Who owns the allocation?",
          "When does the allocation go away?",
          "What is a function?",
        ],
      },
      { type: "paragraph", value: "Those questions matter more than most tutorials admit." },
      { type: "heading", value: "A String Is Not Just Text" },
      { type: "paragraph", value: "Take Rust:" },
      { type: "code", value: 'let name = String::from("Mostafa");' },
      {
        type: "paragraph",
        value: "A lot of tutorials will say this creates a string, and true is true, but is that enough?",
      },
      {
        type: "paragraph",
        value:
          'The useful explanation is that name itself is a small value, usually a pointer, a length, and a capacity; that small value lives wherever the variable lives. While the actual bytes for "Mostafa" live somewhere else, usually on the heap. In the String value is not the text, it is more like a handle to the text.',
      },
      {
        type: "paragraph",
        value:
          "Once name closes, Rust ownership starts feeling much less mystical. Moving a String does not copy all the bytes. It copies the small header and transfers responsibility for freeing the heap allocation. Borrowing a `&str` is not \"name lifetime magic,\" it is a view onto bytes owned by something else. This one mental model explains more than a dozen abstract examples.",
      },
      { type: "paragraph", value: "It explains why this is different:" },
      { type: "code", value: 'let a = String::from("hello");\nlet b = a;' },
      { type: "paragraph", value: "from this:" },
      { type: "code", value: 'let a = "hello";\nlet b = a;' },
      {
        type: "paragraph",
        value:
          "In the first case, ownership of a heap allocation moves, while in the second case you are copying a reference to static data, so even though the syntax looks similar in both cases, the memory story is different.",
      },
      { type: "paragraph", value: "That memory story is the language." },
      { type: "heading", value: "Go Slices Have the Same Problem" },
      { type: "paragraph", value: "Go has a similar problem with slices." },
      { type: "paragraph", value: "People are taught:" },
      { type: "code", value: "nums := []int{1, 2, 3}" },
      {
        type: "paragraph",
        value:
          "Then they learn `append`, `range`, and function parameters, but many beginners are not told early enough that a slice is not the array.",
      },
      {
        type: "paragraph",
        value:
          "A slice is a small descriptor: pointer, length, capacity. The backing array is somewhere else, and passing a slice to a function copies the descriptor, not the entire array, which explains why a function can mutate the underlying elements:",
      },
      { type: "code", value: "func changeOne(s []int) {\n  s[0] = 99\n}" },
      { type: "paragraph", value: "But it also explains why `append` can become confusing:" },
      { type: "code", value: "func addItem(s []int) {\n  s = append(s, 4)\n}" },
      {
        type: "paragraph",
        value:
          "Depending on capacity, `append` may reuse the same backing array or allocate a new one, and if you do not understand the descriptor/backing-array split, this feels like Go being inconsistent. It is not inconsistent, you are just missing the shape of the data, and again, the memory model explains the behavior better than memorizing rules.",
      },
      { type: "heading", value: 'This Is Why People Struggle With "Advanced" Features' },
      {
        type: "paragraph",
        value:
          "A lot of supposedly advanced language features become less scary once the data layout is clear. Rust lifetimes are easier when you understand references as borrowed views into data owned elsewhere. `Box` is easier when you see it as a pointer-sized owner of heap storage, and `Rc<>` or `Arc<>` starts making sense once reference counts and shared heap ownership stop being abstract words.",
      },
      {
        type: "paragraph",
        value:
          "The same thing happens with trait objects when you understand fat pointers and dynamic dispatch/vtables, with Go interfaces when you understand that an interface value carries type information and a value pointer, with Go maps when you realize they are entries-managed hash tables, not ordinary values copied around like structs, with closures when you understand what gets captured and whether it escapes, and with async when you understand that local state may be transformed into a state machine that has to live across suspension points.",
      },
      {
        type: "paragraph",
        value:
          "None of this means you need to be a compiler engineer, it just means you need to know what kind of thing you are holding.",
      },
      { type: "heading", value: "The Real Learning Path" },
      {
        type: "paragraph",
        value: "For systems-ish languages, I think the path should look more like this:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Values and memory layout.",
          "Ownership or lifetime rules.",
          "Allocation and deallocation.",
          "References, pointers, and views.",
          "Collections and their internal shape.",
          "Error handling.",
          "Modules and packages.",
          "Concurrency and async.",
          "Performance tools.",
        ],
      },
      { type: "paragraph", value: "Most tutorials do something closer to:" },
      {
        type: "list",
        ordered: true,
        items: [
          "Variables.",
          "Functions.",
          "Loops.",
          "Structs.",
          "Collections.",
          "Maybe memory later if things get confusing.",
        ],
      },
      {
        type: "paragraph",
        value:
          "The problem is that memory is not a side quest, but the thing making the rest of the language make sense.",
      },
      { type: "heading", value: "The Point" },
      {
        type: "paragraph",
        value:
          "I think this is why some people can write Rust for months and still feel like they are negotiating with the syntax checker instead of understanding it, and it is also why some people write Go for years and still get surprised by slices, interfaces, and allocation noises. They were taught the grammar, not the shape of the values.",
      },
      {
        type: "paragraph",
        value:
          "Learning a language properly means learning what the code means to the machine, not every detail and not all at once, but enough that the behavior stops feeling random.",
      },
      {
        type: "paragraph",
        value:
          "Syntax tells you what you are allowed to write and the memory model tells you what you actually wrote.",
      },
      {
        type: "paragraph",
        value:
          "I personally recommend https://rust-book.cs.brown.edu for learning Rust as a beginner or someone who only knows but don't really understand it.",
      },
    ],
  },
  {
    slug: "forked-helix-agentic-coding",
    date: "2026-05-02",
    title: "I Forked Helix to Make Agentic Coding Feel Native",
    subtitle: "Integrating LLMs directly into the editor buffer",
    content: [
      {
        type: "paragraph",
        value:
          "After spending months bouncing between Cursor, Zed, and Helix, I decided to fork Helix and make agentic coding a first-class citizen. Here is what I learned.",
      },
      { type: "heading", value: "Why Helix?" },
      {
        type: "paragraph",
        value:
          "Helix is modal, fast, and written in Rust. It treats the buffer as a structured object, not a string of bytes, which makes it surprisingly good for programmatic edits from an LLM.",
      },
    ],
  },
  {
    slug: "inode-style-vector-rust",
    date: "2026-04-22",
    title: "What Happens When You Build an Inode-Style Vector in Rust",
    subtitle: "Exploring memory layouts and cache locality",
    content: [
      {
        type: "paragraph",
        value:
          "I wanted to see what would happen if I built a vector data structure that mimicked the inode layout used in classic Unix filesystems. The results were interesting.",
      },
    ],
  },
  {
    slug: "scalar-types-not-enough",
    date: "2026-04-13",
    title: "Everything Should Be Typed: Scalar Types Are Not Enough",
    subtitle: "Domain-driven design at the type level",
    content: [
      {
        type: "paragraph",
        value:
          "A `u64` is not a user ID. A `String` is not an email address. If your type system lets you mix them up, your type system is not doing its job.",
      },
    ],
  },
  {
    slug: "building-khoomi-week-3",
    date: "2026-01-30",
    title: "Building Khoomi - Week 3: Multi-Vendor Order Architecture",
    subtitle: "Handling complex state in a distributed system",
    content: [
      {
        type: "paragraph",
        value:
          "This week I tackled the hardest problem in the Khoomi marketplace: how to handle orders that contain items from multiple vendors. Here is what I came up with.",
      },
    ],
  },
];
