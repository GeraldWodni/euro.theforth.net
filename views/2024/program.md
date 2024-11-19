# 40th EuroForth 2024

## Programme

__Please Note:__ This is a preliminary programme and subject to change.

### Forth standard meeting
Times are converted to your local timezone indicated by a blue background, if you have javascript enabled (no, this cannot be done server-side). \
Otherwise `UTC(+0)` will be displayed and you have to calculate the offset yourself.

#### Wednesday, 25th September UTC(+0)
- 13:00 Session 1
- 15:00 Coffee Break
- 15:15 Session 2
- 17:00 End of main sessions
- Workshops

#### Thursday, 26th September UTC(+0)
- 08:30 Session 4
- 09:30 Coffee Break
- 09:45 Session 5
- 11:15 Lunch
- 12:30 Session 6
- 14:45 Coffee Break
- 15:00 Session 7
- 17:00 End of main sessions
- Workshops

#### Friday, 26th September UTC(+0)
- 08:30 Session 9
- 09:30 Coffee Break
- 09:45 Session 10
- 11:00 End of Standards Meeting


### EuroForth conference
**on air** ... these session are streamed live on [twitch](https://www.twitch.tv/4ther), recorded and shared on [youtube](https://www.youtube.com/channel/UC_mpkwOO_1ILd66GUTNVPQg) for future generations to enjoy and to rewatch

<!--
#### Friday, 27th September UTC(+0)
- 13:00 Session 1 **on air**
  - M. Anton Ertl:  How to Implement Words (Efficiently)  (45min)  
    The implementation of Forth words has to satisfy the following requirements: 1) A word must be represented by a single cell (for EXECUTE). 2) A word may represent a combination of code and data (for, e.g., DOES>).  In addition, on some hardware, keeping executed native code and (written) data close together results in slowness and therefore should be avoided; moreover, failing to pair up calls with returns results in (slow) branch mispredictions.  The present work describes how various Forth systems over the decades have satisfied the requirements, and how many systems run into performance pitfalls in various situations.  This paper also discusses how to avoid this slowness, including in native-code systems.
  - Nick Nelson: A Forth binding for GTK4  (45min)  
    For some years, a Forth binding to major version 3 of the widely used graphical user interface toolkit GTK has been available. The major version 4 of GTK introduces  
    many incompatibilities, so that a completely different approach to the binding is needed. It will be shown how the unique features of Forth can be leveraged to overcome the difficulties introduced by GTK4.
- 14:30 BioBreak
- 14:50 Session 2 **on air**
  - Francois Laagel: Pac-man for the DEC VT420 (30min)  
    Pac-man was a graphical game designed in 1979 by a team of five people and implemented in Z80 assembly language over the course of seventeen months. This presentation will be a first person evolutionary account of my own Forth implementation in ANS94 Forth for the Digital VT420 text terminal over a three month period. The C port of the resulting application will also be covered briefly. Stress will be laid upon the value of standards and the development of ad'hoc tools.
  - Bill Stoddart: Prospective values and Forth (45min)  
    We give a mathematical semantics for a reversible Forth that supports backtracking.
- 16:05  Workshops / Important night talks

#### Saturday, 28th September UTC(+0)
- 08:30 Session 3 **on air**
  - Nick Nelson:  SpeechForth aka Bekki (15min)  
    An idea for an alternative to touchscreens for user interfaces
  - M. Anton Ertl:  The Performance Effects of Virtual-Machine Instruction Pointer Updates (2024 update)  (45min)  
    How much performance do VM instruction-pointer (IP) updates cost and how much benefit do we get from optimizing them away?  Two decades ago it had little effect on the hardware of the day, but on recent hardware the dependence chain of IP updates can become the critical path on processors with out-of-order execution.  In particular, this happens if the VM instructions are light-weight and the application programs are loop-dominated.  The present work presents several ways of reducing or eliminating the dependence chains from IP updates, either by breaking the dependence chains with the l (loop) optimization or by reducing the number of IP updates (the c (combined)  and ci (c and immediate) optimizations) or their latency (the b (branch) optimization).  Some benchmarks see speedups from these optimizations by factors >2 on most recent cores, while other benchmarks and older cores see more modest results, often in the speedup ranges 1.1-1.3.
- 09:30 BioBreak
- 09:50 Session 4 **on air**
  - Gerald Wodni: Calling C from Forth automagically (45min)  
    First idea close at Edinburg Conference, now nearly working
- 10:35  Lunch
- 13:00 Excursion ToDo: Details
- 16:30 Formal Dinner
- 19:30 Workshops / Important night talks

#### Sunday, 29th September UTC(+0)
- 08:30 Session 5 **on air**
  - Paul E. Bennett IEng MIET: Why another book on Forth (40min)  
    
  - Bill Stoddart: Forth in a container (20min)  
    Following suggestions given for resolving difficulties maintaining our 32 bit Forth, we now run meta-compilation in a container.
- 09:30 BioBreak
- 09:45 Session 6 **on air**
  - M. Anton Ertl:  The new Gforth Decompiler (20min)  
    ...
- 10:05  Official end of EuroForth
- 12:30 Lunch
- 13:30 Beginning of Forth Day
  As quite a bunch of us are staying for extra nights, we will venture together into the city to see even more
-->

#### Friday, 27th September UTC(+0)
- 13:00 Session 1 **on air**
  - M. Anton Ertl:  How to Implement Words (Efficiently)  (45min)  
    The implementation of Forth words has to satisfy the following requirements: 1) A word must be represented by a single cell (for EXECUTE). 2) A word may represent a combination of code and data (for, e.g., DOES>).  In addition, on some hardware, keeping executed native code and (written) data close together results in slowness and therefore should be avoided; moreover, failing to pair up calls with returns results in (slow) branch mispredictions.  The present work describes how various Forth systems over the decades have satisfied the requirements, and how many systems run into performance pitfalls in various situations.  This paper also discusses how to avoid this slowness, including in native-code systems.
  - Nick Nelson: A Forth binding for GTK4  (45min)  
    For some years, a Forth binding to major version 3 of the widely used graphical user interface toolkit GTK has been available. The major version 4 of GTK introduces  
    many incompatibilities, so that a completely different approach to the binding is needed. It will be shown how the unique features of Forth can be leveraged to overcome the difficulties introduced by GTK4.
- 14:30 BioBreak
- 14:50 Session 2 **on air**
  - Francois Laagel: Pac-man for the DEC VT420 (30min)  
    Pac-man was a graphical game designed in 1979 by a team of five people and implemented in Z80 assembly language over the course of seventeen months. This presentation will be a first person evolutionary account of my own Forth implementation in ANS94 Forth for the Digital VT420 text terminal over a three month period. The C port of the resulting application will also be covered briefly. Stress will be laid upon the value of standards and the development of ad'hoc tools.
  - Bill Stoddart: Prospective values and Forth (45min)  
    We give a mathematical semantics for a reversible Forth that supports backtracking.
- 16:05  Workshops / Important night talks

#### Saturday, 28th September UTC(+0)
- 08:30 Session 3 **on air**
  - Nick Nelson:  SpeechForth aka Bekki (15min)  
    An idea for an alternative to touchscreens for user interfaces
  - M. Anton Ertl:  The Performance Effects of Virtual-Machine Instruction Pointer Updates (2024 update)  (45min)  
    How much performance do VM instruction-pointer (IP) updates cost and how much benefit do we get from optimizing them away?  Two decades ago it had little effect on the hardware of the day, but on recent hardware the dependence chain of IP updates can become the critical path on processors with out-of-order execution.  In particular, this happens if the VM instructions are light-weight and the application programs are loop-dominated.  The present work presents several ways of reducing or eliminating the dependence chains from IP updates, either by breaking the dependence chains with the l (loop) optimization or by reducing the number of IP updates (the c (combined)  and ci (c and immediate) optimizations) or their latency (the b (branch) optimization).  Some benchmarks see speedups from these optimizations by factors >2 on most recent cores, while other benchmarks and older cores see more modest results, often in the speedup ranges 1.1-1.3.
- 09:30 BioBreak
- 09:50 Session 4 **on air**
  - Gerald Wodni: Calling C from Forth automagically (45min)  
    First idea close at Edinburg Conference, now nearly working
- 10:35  Excursion TBD
- Workshops

#### Sunday, 29th September UTC(+0)
- 08:30 Session 5 **on air**
  - Paul E. Bennett IEng MIET: Why another book on Forth (40min)  
    
  - Bill Stoddart: Forth in a container (20min)  
    Following suggestions given for resolving difficulties maintaining our 32 bit Forth, we now run meta-compilation in a container.
- 09:30 BioBreak
- 09:45 Session 6 **on air**
  - M. Anton Ertl:  The new Gforth Decompiler (20min)  
    ...
- 10:05  End of EuroForth Conference
