# 39th EuroForth 2023

## Programme


### Forth standard meeting
Times are converted to your local timezone indicated by a blue background, if you have javascript enabled (no, this cannot be done server-side). \
Otherwise `UTC(+0)` will be displayed and you have to calculate the offset yourself.

#### Wednesday, 13th September UTC(+0)
- 10:00 Get together - Setup your gear and smalltalk  
- 10:15 Call to order - get ready  
- 10:30 Session 1  
- 12:30 Coffee Break  
- 13:00 Session 2  
- 15:00 Bio Break  
- 15:15 Session 3  
- 17:00 End of main sessions  
- Workshops

#### Thursday, 14th September UTC(+0)
- 07:00 Get together - Setup your gear and smalltalk  
- 07:15 Call to order - get ready  
- 07:30 Session 4  
- 09:00 Coffee Break
- 09:15 Session 5  
- 10:30 Lunch Break  
- 11:30 Session 6  
- 13:30 Coffee Break  
- 14:00 Session 7  
- 16:00 Bio Break  
- 16:15 Session 8  
- 18:00 End of main sessions  
- Workshops

#### Friday, 15th September UTC(+0)
- 07:00 Get together - Setup your gear and smalltalk  
- 07:15 Call to order - get ready
- 07:30 Session 9  
- 09:15 Coffee Break  
- 09:30 Session 10  
- 11:00 End of Standards Meeting


### EuroForth conference
**on air** ... these session are streamed live on [twitch](https://www.twitch.tv/4ther), recorded and shared on [youtube](https://www.youtube.com/channel/UC_mpkwOO_1ILd66GUTNVPQg) for future generations to enjoy and to rewatch

#### Friday, 15th September UTC(+0)
- 12:30 Session 1 **on air**
  - Nick Nelson:  Accessing an Oracle database from Forth (40min)  
    The technique for accessing an Oracle database is very different from that needed for MySQL.   
    The paper will describe a set of wrappers that allow for simple access.
  - M. Anton Ertl: The Performance Effects of Virtual-Machine Instruction Pointer Updates  (45min)  
    By optimizing instruction-pointer updates away where possible, the number of executed instructions is typically reduced by a factor of 1.2.  The speedup varies widely with the microarchitecture and benchmark, from slowdowns by a factor of 1.1 to speedups by a factor of 2.2.  This talk looks at how the big speedups can be explained, and at an alternative way to achieve some of the same speedups.
- 13:55 BioBreak
- 14:15 Session 2 **on air**
  - Glyn Faulkner: 4g and F.A.I.L.: Writing all the Forths (45min)  
    In last year's talk about my unhealthy obsession with writing Forths I joked that the next step would be to automate my hobby. At least I thought I was joking: this year I present 4g, the Forth Generator, which produces Forth interpreters based on a set of user-supplied parameters, and F.A.I.L, the Forth Abstract Instruction Language, a Forth-specific assembly language that abstracts away implementation details like threading-model, register mappings and dictionary structure.
  - Gerald Wodni: VFX TUI (45min)  
    UI5 is well on its way, but we took a pit-stop to implement some features on a lower level. So now we have a super shiny Terminal interface.
- 15:45  Workshops / Important night talks

#### Saturday, 16th September UTC(+0)
- 07:00 Session 3 **on air**
  - Francois Laagel: CPE1704TKS: Engineering Field Notes from a Debugging Session (30min)  
    A new mechanism based on a cryptographic message digest that helps ensuring the integrity of the system stack. Its use will be illustrated in the context of a recursive algorithm aimed at solving Hexadoku puzzles.
  - Ulrich Hoffmann: Value Flavoured Structures (30min)  
    This talk presents an implementation of Forth Value Flavoured Structures, collections of data elements with named fields that are associated with their appropriate access operators. This reliefs the programmer to remember the types and access operators for all the fields in structures.
- 08:00 BioBreak
- 08:20 Session 4 **on air**
  - William Stoddart: Prospective values and Forth. (45min)  
    Prospective value semantics is suitable for describing backtracking programs. We describe how it applies to Forth. The presentation includes a new concept of function application, based on the idea that a function application might represent nothing, e.g 1/0.
  - Nick Nelson: A proposed standard Forth style enumeration word set, using recognisers  (40min)  
    The lack of an ENUM word in the Forth standard has been previously noted.  
    The paper describes a solution that is fully faithful to Forth styling.  
    The implementation uses recognisers. Some potentially useful extensions will be discussed.
- 09:45  Lunch
- 11:00 Excursion to Rome (__Hint/ToDo:__ _specific route and times subject to change_)
- 12:00 Starting at Termini (train station
- 12:50 Fontana die Trevi (Trevi fountain - 15min for Photos)
- 13:15 Meetup with tour guide
- 13:30 Tour of the Colosseum, Roman Forum & Palatine Hill
- 16:30 Not-so-formal Formal Dinner
- 19:30 Workshops / Important night talks

#### Sunday, 17th September UTC(+0)
- 07:00 Session 5 **on air**
  - M. Anton Ertl:  Fix Spectre in Hardware!  (45min)  
    Spectre can be fixed in hardware by treating speculative microarchitectural state in the same way as speculative architectural state: On misspeculation throw away all the speculatively-performed changes.  The resource-contention side channel needs to be closed,  
    too.  This talk also explains how Spectre works and why software mitigations are not sufficient.
  - Ulrich Hoffmann: Impromptu talk: ROMAN (10min)  
    A Forth like language inspired by roman history and an exercise in recognizers.
  - Various Forthers: Impromtu Talks & Workshops (35min)  
    Impromptu talks are a big part of EuroForth: Ideas you've had which are not yet ready for a big talk, but you want to collect some feedback from other professionals can be discussed and might evolve into a workshopL
- 08:30 BioBreak
- 08:45 Session 6 **on air**
  - M. Anton Ertl:  Magic Hexagon and Constraints (25min)  
    Magic Hexagon and Constraints  
      
    In this talk I look at the Magic Hexagon puzzle and three ways of solving it: A relatively direct backtracking approach, and two constraint-based approaches: One just using `alldifferent` constraints, and one also using bounds-based constraints.
  - William Stoddart: Impromtu Talks & Workshops  (65min)  
    Impromptu talks are a big part of EuroForth: Ideas you've had which are not yet ready for a big talk, but you want to collect some feedback from other professionals can be discussed and might evolve into a workshopL
- 10:15  Official end of EuroForth
- 10:30 Lunch
- 11:30 Beginning of Forth Day  
  As quite a bunch of us are staying for extra nights, we will venture together into Rome to see even more

