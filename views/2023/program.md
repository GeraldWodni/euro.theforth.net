# EuroForth 2023 NOT FINAL, JUST A TEMPLATE!

## Programme


### Forth standard meeting
Times are converted to your local timezone indicated by a blue background, if you have javascript enabled (no, this cannot be done server-side). \
Otherwise `UTC(+0)` will be displayed and you have to calculate the offset yourself.

#### Wednesday, 14th September UTC(+0)
- 14:30 Get together - Setup your gear and smalltalk
- 14:50 Call to order - get ready (please be online by now)
- 15:00 Session 1
- 17:00 Bio Break
- 17:15 Session 2
- 19:00 End of main session

#### Thursday, 15th September UTC(+0)
- 14:30 Get together - Setup your gear and smalltalk
- 14:50 Call to order - get ready (please be online by now)
- 15:00 Session 3
- 17:00 Bio Break
- 17:15 Session 4
- 19:00 End of main session

### EuroForth conference
**on air** ... these session are streamed live on [twitch](https://www.twitch.tv/4ther), recorded and shared on [youtube](https://www.youtube.com/channel/UC_mpkwOO_1ILd66GUTNVPQg) for future generations to enjoy and to rewatch

#### Friday, 16th September UTC(+0)
- 13:00 Get together - Setup your gear and smalltalk
- 13:50 Call to order - get ready (please be online by now)
- 14:00 Welcome and Introduction
- 14:30 Session 1 **on air**
  - Nick Nelson: Better Values (30min)  
    Improvements to the implementation of the extended Forth VALUE concept
  - Ulrich Hoffmann: Fuzzing Forth (45min)  
    Fuzzing is an automatic testing strategy that can be used to increase the reliability of applications.   
    Application interfaces are tested with selected random (fuzzed) arguments in order to uncover implementation problems.  
    The talk will explain various building blocks for fuzz testing, namely corectness notions, generators, mutators, sanitizers, among others, and see how Forth applications can benefit from fuzzing.
- 15:45 BioBreak
- 16:05 Session 2 **on air**
  - M. Anton Ertl: Memory Safety Without Tagging nor Static Type Checking  (45min)  
    A significant proportion of vulnerabilities are due to memory accesses  
    (typically in C code) that memory-safe languages like Java prevent.  
    This talk discusses a new approach to modifying Forth for  
    memory-safety: Eliminate addresses from the data stack; instead, put  
    object references on a separate object stack and use  
    value-flavoured words.  This approach avoids the complexity of  
    static type checking (used in, e.g., Java and Factor), and also avoids  
    the performance overhead of dynamic type checking for non-memory  
    operations.
  - Krishna Myneni: Progress Towards Porting EISPACK to Forth (40min)  
    I will give an update on my status of porting EISPACK, the old Fortran package for obtaining numerical solutions of eigensystems problems, to standard Forth. I will describe the rationale behind porting this particular package, instead of a modern package like LAPACK, give an overview of the library modules present in EISPACK, and talk about some of the challenges in porting unstructured Fortran 77 code to current Forth and in testing both the original and ported code. Examples of use in Forth will be presented, for those modules which have already been ported.
- 17:30  End of presentations, start of work shops

#### Saturday, 17th September UTC(+0)
- 13:00 Get together - Setup your gear and smalltalk
- 13:50 Call to order - get ready
- 14:00 Session 3 **on air**
  - Andrew Read: Can I do this in Forth? (45min)  
    A modern instrumentation control and data analysis application is astroimaging at amateur and semiprofessional observatories.  A case for Forth software raises interesting questions!
  - Glyn Faulkner: Tales from the Left-Hand Path: Dark Confessions of a Forth Hobbyist (40min)  
    Question: What happens when you combine an unhealthy Forth obsession with a background in programming language implementation and a perverse liking for the GNU assembler?  
    Answer: Nothing good or wholesome...
- 15:25 BioBreak
- 15:40 Session 4 **on air**
  - Klaus Schleisiek:  German Academia and Forth (20min)  
    A report on the 38th Workshop der GI-Fachgruppe "Programmiersprachen und Rechenkonzepte"
  - Virtual Excursion: your favourite technical gadget (30min)  
    introduce us to your favourite technical thingy you need us to know about in 1 minute.  
    Feel free to take something obvious at the risk of having somebody else with the same gadget or pick such a specialized tool who's explanation makes our brain hurt.  
    Please upload 1-3 images into the mattermost channel prior to this deadline "virtual excursion".
- 16:30  Cooking/Ordering formal Dinner
- 18:00 Formal dinner with open chat, followed by work shops

#### Sunday, 18th September UTC(+0)
- 13:00 Get together - Setup your gear and smalltalk
- 13:50 Call to order - get ready
- 14:00 Session 5 **on air**
  - Bernd Paysan: Gforth 1.0 (30min)  
    Gforth is getting closer and closer to the 1.0 release; time to report what changes.
  - Klaus Schleisiek: uCore progress  (20min)  
    byte addressing and complete division/multiplication test
- 14:50 BioBreak
- 15:05 Session 6 (Impromptu Talks) **on air**
  - Ulrich Hoffmann: Standard Report (10min)  
    What has been discussed in the just past standard's meeting?
  - Leon Wagner: Tracking celestial bodies with a satellite antenna (2min)  
    We added celestial body tracking to our fast antenna controllers last year, primarily for tracking the moon. During testing, we strapped a webcam to an antenna mount and tracked the moon from rise to set in the sky over Fresno, California. I'll show the time-lapse video of this.
  - Gerald Wodni: VFX Future / more TUI (15min)  
    Wodni & Pelc is already up & running, VFX is receiving new TUI tools
  - Nate Morse: Joy to the Web: A Zero Install version of Joy (not a production) Language called Pounce (5min)  
    l could not get the "Joy language" to run on my hardware, so I started making interpreters (as one does).  In the process of making interpreters, choices are made that deviated from "pure" Joy.  I love the Forth way, and I am enamored by functional programming, so I followed Joy -> Cat -> Kitten, which lead me to make this browser based language, Pounce. Pounce has zero state outside of the stack and the program queue (dequeue), see https://pounce-lang-show-case.netlify.app/ and https://github.com/pounce-lang
  - Bob Armstrong: CoSy ` NoteComuting environment demo (15min)  
    Brief demo of CoSy environment which I use every day as a timestamped diary/log & to doing my accounting and mail_list handling .   
    CoSy is a Vocabulary in open Forth implementing reference counted dynamic lists very much modeled on Arthur Whitney's K , evolved from Ken Iverson's APL .  Indexing is Modulo .
  - M. Anton Ertl:  Are locals inevitably slow? (15min)  
    Code quality of locals on two code examples on various systems
  - Ulrich Hoffmann: Enums in Forth (10min)  
    How can we define Enums in Forth? Let's look at best practice and alternatives.
  - Nick Nelson: Resource embedding in Forth (10min)  
    How we put icons, images, UI definitions, CSS styling sheets etc. into our Forth executables.
  - Howerd Oakford: colorForth (0min)  
    
  - Nick Nelson: Lightning Talk (10min)  
    
  - A fellow Forther: Lightning Talks (10min)  
    
- 16:47  TBA
- 17:30 End of EuroForth 2022
