---
path: "/blog/minecraft-argumentos-java"
date: "2020-09-30"
language: "pt-BR"
author: "Cássio Fernando"
title: "Minecraft | Alocando memória e otimizando"
description: "Veja múltiplas linhas de argumento feitas por mim, outras pessoas e a própria mojang!"
metaImage: "https://i.imgur.com/7FpLef0.png"
tags: ["minecraft", "java", "games"]
---

Cássio aqui. Semana passada visitei a casa da minha vó e tentei jogar minecraft no pc de lá. Porém não era um dos melhores e eu sofri para jogar com mods. Então dei uma pesquisada e estou compartilhando oque eu aprendi.

## Argumentos

Nessa seção irei apenas compartilhar para que você possa colar os argumentos e colocar no seu minecraft ou outro jogo em java. Caso queira você pode continuar lendo mais a fundo e ver as referências no final do blog.

Vale lembrar que a documentação está em inglês, irei fazer uma breve tradução para que todos possam entender.

Se tiver alguma dúvida ou encontre algum erro, sinta-se livre para entrar em contato.

Testei todos eles nessa versão **JRE 1.8.0_261**. Você pode baixalo neste [link](https://www.java.com/en/download/manual.jsp).

### Argumentos Padrão

Cheque se o argumento padrão funciona na sua maquina.

```bash
-Xmx1G -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:-UseAdaptiveSizePolicy -Xmn128M
```

## Argumentos do Tenelia

Esses não foram feito por mim, mas por um internauta chamado Tenelia [here](https://xealgaming.net/threads/optimising-your-minecraft-jvm-arguments.4758/).

### 3Gb de RAM livre

```bash
-Xmx3G -Xms3G -Xmn768m -XX:+DisableExplicitGC -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+UseNUMA -XX:+CMSParallelRemarkEnabled -XX:MaxTenuringThreshold=15 -XX:MaxGCPauseMillis=30 -XX:GCPauseIntervalMillis=150 -XX:+UseAdaptiveGCBoundary -XX:-UseGCOverheadLimit -XX:+UseBiasedLocking -XX:SurvivorRatio=8 -XX:TargetSurvivorRatio=90 -XX:MaxTenuringThreshold=15 -Dfml.ignorePatchDiscrepancies=true -Dfml.ignoreInvalidMinecraftCertificates=true -XX:+UseFastAccessorMethods -XX:+UseCompressedOops -XX:+OptimizeStringConcat -XX:+AggressiveOpts -XX:ReservedCodeCacheSize=2048m -XX:+UseCodeCacheFlushing -XX:SoftRefLRUPolicyMSPerMB=10000 -XX:ParallelGCThreads=10
```

### 1Gb de RAM livre

```bash
-Xmx1G -Xms1G -Xmn128m -XX:+DisableExplicitGC -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+UseNUMA -XX:+CMSParallelRemarkEnabled -XX:MaxTenuringThreshold=15 -XX:MaxGCPauseMillis=30 -XX:GCPauseIntervalMillis=150 -XX:+UseAdaptiveGCBoundary -XX:-UseGCOverheadLimit -XX:+UseBiasedLocking -XX:SurvivorRatio=8 -XX:TargetSurvivorRatio=90 -XX:MaxTenuringThreshold=15 -Dfml.ignorePatchDiscrepancies=true -Dfml.ignoreInvalidMinecraftCertificates=true -XX:+UseFastAccessorMethods -XX:+UseCompressedOops -XX:+OptimizeStringConcat -XX:+AggressiveOpts -XX:ReservedCodeCacheSize=2048m -XX:+UseCodeCacheFlushing -XX:SoftRefLRUPolicyMSPerMB=2000 -XX:ParallelGCThreads=10
```

### 4+Gb de RAM livre

Esse foi modificado por mim.

```bash
-Xmx4G -Xms4G -Xmn768m -XX:+DisableExplicitGC -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+UseNUMA -XX:+CMSParallelRemarkEnabled -XX:MaxTenuringThreshold=15 -XX:MaxGCPauseMillis=30 -XX:GCPauseIntervalMillis=150 -XX:+UseAdaptiveGCBoundary -XX:-UseGCOverheadLimit -XX:+UseBiasedLocking -XX:SurvivorRatio=8 -XX:TargetSurvivorRatio=90 -XX:MaxTenuringThreshold=15 -Dfml.ignorePatchDiscrepancies=true -Dfml.ignoreInvalidMinecraftCertificates=true -XX:+UseFastAccessorMethods -XX:+UseCompressedOops -XX:+OptimizeStringConcat -XX:+AggressiveOpts -XX:ReservedCodeCacheSize=2048m -XX:+UseCodeCacheFlushing -XX:SoftRefLRUPolicyMSPerMB=10000 -XX:ParallelGCThreads=10 -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:-UsePerfData
```

## G1GC Argumentos

Esses usam um recurso mais recente do java e foram feitos por mim.

### 4Gb RAM / 4 threads / 4 cores:

```bash
-Xms2G -Xmx2G -Xmn384m -XX:+AggressiveOpts -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:+UseCompressedOops -XX:-UsePerfData -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=4 -XX:ConcGCThreads=2 -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=50 -XX:G1HeapRegionSize=1 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=8
```

### 8+Gb RAM / 8threads / 4 cores:

O minecraft sem mods vai dificilmente usar mais de 4Gb, mas se quiser alocar mais memória ou fazer sua própria linha sinta-se livre para ler e testar todas as opções 😄

```bash
-Xms4G -Xmx4G -Xmn512m -XX:+AggressiveOpts -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:-UsePerfData -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=2 -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=50 -XX:G1HeapRegionSize=1 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=8
```

### Muitos mods!

Se você ta usando mods pesados ou em grande quantidade e possui maid de 8Gb de ram, talvez você precise de um pouco mais de memória:

```bash
-Xms6G -Xmx6G -Xmn768m -XX:+AggressiveOpts -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:+UseCompressedOops -XX:-UsePerfData -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=2 -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=50 -XX:G1HeapRegionSize=1 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=8
```

## Guia dos Argumentos

Todas as descrições que estão em *blockquote* são oficiais da oracle. Caso queira conferir, os links estão no final do artigo.

Valores com o *placeholder* ```<var>``` devem ser preenchidos manualmente pois não possuem um padrão definido pela oracle.

A linha abaixo mostra os 3 argumentos mais conhecidos.

```bash
-Xms<var> -Xmx<var> -Xmn<var>
```

### Xms

Basicamente a memória usada no inicio.

> Setting initial and minimum heap size
> 
> Oracle recommends setting the minimum heap size `-Xms` equal to the maximum heap size `-Xmx` to minimize garbage collections.

### Xms

Memória máxima a ser utilizada

> Setting maximum heap size
> 
> Setting a low maximum heap value compared to the amount of live data decrease performance by forcing frequent garbage collections.

### Xmn

Basicamente a memória mínima para o java limpa o lixo.

> Minimum java heap size.
>  
>  Oracle recommends that `-Xmn` and `-Xmx` be set to the same value. This eliminates potentially costly heap reallocations, and can reduce the amount of heap fragmentation that can occur. Setting `-Xms` is then unnecessary since the heap size itself is static.


## Argumentos Avançados da JVM

```bash
-XX:+AggressiveOpts -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:+UseCompressedOops -XX:-UsePerfData
```

### AggressiveHeap

Esse argumento otimiza os parâmetros de maneira automática.

> Enables Java heap optimization. This sets various parameters to be optimal for long-running jobs with intensive memory allocation, based on the configuration of the computer (RAM and CPU). By default, the option is disabled and the heap is not optimized.

---

### AggressiveOpts

Habilita recursos de otimização.

> Enables the use of aggressive performance optimization features, which are expected to become default in upcoming releases. By default, this option is disabled and experimental performance features are not used.

---

### AlwaysPreTouch

Em simples palavras mapea a memória virtual na memória física.

> Enables touching of every page on the Java heap during JVM initialization. This gets all pages into the memory before entering the  `main()`  method. The option can be used in testing to simulate a long-running system with all virtual memory mapped to physical memory. By default, this option is disabled and all pages are committed as JVM heap space fills.

---

### DisableExplicitGC

Melhora a perfomance da coleta de lixo.

> Another way that applications can interact with garbage collection is by invoking full garbage collections explicitly by calling  `System.gc()`. This can force a major collection to be done when it may not be necessary (for example, when a minor collection would suffice), and so in general should be avoided. The performance effect of explicit garbage collections can be measured by disabling them using the flag  `-XX:+DisableExplicitGC`, which causes the VM to ignore calls to  `System.gc()`.

---

### ParallelRefProcEnabled

Utiliza melhor o processamento paralelo.

> Enables parallel reference processing. By default, this option is disabled.

---

### PerfDisableSharedMem 

Não achei a documentação oficial para esse, mas basicamente ele não deixa o coletor fazer diagnósticos.

---

### UsePerfData

Monitoramento e teste de performance.

> Enables the `perfdata` feature. This option is enabled by default to allow JVM monitoring and performance testing. Disabling it suppresses the creation of the `hsperfdata_userid` directories. To disable the `perfdata` feature, specify `-XX:-UsePerfData`.

---

### UseCompressedOops

Utiliza menos espaço na RAM.

> Disables the use of compressed pointers. By default, this option is enabled, and compressed pointers are used when Java heap sizes are less than 32 GB. When this option is enabled, object references are represented as 32-bit offsets instead of 64-bit pointers, which typically increases performance when running the application with Java heap sizes less than 32 GB. This option works only for 64-bit JVMs.

---

## Garbage Colectors

A versão **JRE 1.8.0_261** do java possui esses coletores:

 - Serial Garbage Colector:

Utiliza apenas um núcleo.

> The serial collector uses a single thread to perform all garbage collection work, which makes it relatively efficient because there is no communication overhead between threads. It is best-suited to single processor machines, because it cannot take advantage of multiprocessor hardware, although it can be useful on multiprocessors for applications with small data sets (up to approximately 100 MB). The serial collector is selected by default on certain hardware and operating system configurations, or can be explicitly enabled with the option  `-XX:+UseSerialGC`.

 - Parallel Garbage Colector:

O primeiro só que com mais *threads*.

> The parallel collector (also known as the  _throughput collector_) performs minor collections in parallel, which can significantly reduce garbage collection overhead. It is intended for applications with medium-sized to large-sized data sets that are run on multiprocessor or multithreaded hardware. The parallel collector is selected by default on certain hardware and operating system configurations, or can be explicitly enabled with the option  `-XX:+UseParallelGC`.

 - Concurrent Mark Sweep (CMS) Collector:

Utilizado em aplicações com baixo uso de memória RAM.

> The Concurrent Mark Sweep (CMS) collector is designed for applications that prefer shorter garbage collection pauses and that can afford to share processor resources with the garbage collector while the application is running. Typically applications that have a relatively large set of long-lived data (a large tenured generation) and run on machines with two or more processors tend to benefit from the use of this collector. However, this collector should be considered for any application with a low pause time requirement. The CMS collector is enabled with the command-line option  `-XX:+UseConcMarkSweepGC`.

 - Garbage-First Garbage Collector:

Utilizado para aplicações com uso intenso de RAM.

> The Garbage-First (G1) garbage collector is a server-style garbage collector, targeted for multiprocessor machines with large memories. It attempts to meet garbage collection (GC) pause time goals with high probability while achieving high throughput. Whole-heap operations, such as global marking, are performed concurrently with the application threads. This prevents interruptions proportional to heap or live-data size.  The G1GC is enabled with the command-line option  `-XX:+UseG1GC`.

 - Z Garbage Colector (ZGC):
 
 Esse é o mais recente e só é habilitado na versão JDK 11+, se você é um usuário avançado pode baixar e testar nesse [link](https://jdk.java.net/15/).

> The Z Garbage Collector (ZGC) is a scalable low latency garbage collector. ZGC performs all expensive work concurrently, without stopping the execution of application threads for more than a few milliseconds. It is suitable for applications which require low latency. Pause times are independent of heap size that is being used. ZGC supports heap sizes from 8MB to 16TB. The Z Garbage Collector is enabled with the command-line option  `-XX:+UseZGC`.


A linha abaixo mostra 3 argumentos utilizados em todos os coletores.

```bash
-XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=<var> -XX:ConcGCThreads=<var>
```
---

### MaxGCPauseMillis

O tempo máximo da interrupção para coleta.

> The goal for the maximum pause time.

---

### ParallelGCThreads

Número de *threads* que o coletor utiliza.

> The maximum number of threads used for parallel work during garbage collection pauses. This is derived from the number of available threads of the computer that the VM runs on in the following way: if the number of CPU threads available to the process is fewer than or equal to 8, use that. Otherwise add five eighths of the threads greater than to the final number of threads.
> 
> At the start of every pause, the maximum number of threads used is further constrained by maximum total heap size: G1 will not use more than one thread per `-XX:HeapSizePerGCThread` amount of Java heap capacity.

---

### ConcGCThreads

Máximo número de *threads* para processos concorrentes.

> The maximum number of threads used for concurrent work. By default, this value is `-XX:ParallelGCThreads` divided by 4.

---

## G1GC

Argumentos padrão:

```bash
-XX:+UseG1GC -XX:+G1UseAdaptiveIHOP -XX:InitiatingHeapOccupancyPercent=45 -XX:G1HeapRegionSize=<var> -XX:G1NewSizePercent=5 -XX:G1MaxNewSizePercent=60 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=8 -XX:G1MixedGCLiveThresholdPercent=85 -XX:-G1EnableStringDeduplication
```

### G1UseAdaptiveIHOP  and InitiatingHeapOccupancyPercent

**JRE 1.8.0_261** não suporta.

Esses argumentos controlam a memória inicial do *heap*.

> Defaults for controlling the initiating heap occupancy indicate that adaptive determination of that value is turned on, and that for the first few collection cycles G1 will use an occupancy of 45% of the old generation as mark start threshold.

---

### G1HeapRegionSize

O tamanho de uma região do *heap*.

> The size of the heap regions. The default value is based on the maximum heap size and it is calculated to render roughly 2048 regions. The size must be a power of 2, and valid values are from 1 to 32 MB.

---

### G1NewSizePercent and G1MaxNewSizePercent
Argumento experimental use:

```bash
-XX:+UnlockExperimentalVMOptions
```

O tamanho da nova geração.

> The size of the young generation in total, which varies between these two values as percentages of the current Java heap in use.

---

### G1MixedGCCountTarget

> The expected length of the space-reclamation phase in a number of collections.

---

### G1MixedGCLiveThresholdPercent

Argumento experimental use:

```bash
-XX:+UnlockExperimentalVMOptions
```

> Old generation regions with higher live object occupancy than this percentage aren't collected in this space-reclamation phase.

---

### G1EnableStringDeduplication

**JRE 1.8.0_261** não suporta.

Coleta *strings* duplicadas.

> String deduplication is disabled by default. You can enable it.

---

## CMS

Argumentos padrão:

```bash
-XX:+UseConcMarkSweepGC -XX:-CMSIncrementalMode -XX:-CMSIncrementalPacing -XX:CMSIncrementalDutyCycle=10 -XX:CMSIncrementalDutyCycleMin=0 -XX:CMSIncrementalSafetyFactor=10  -XX:CMSIncrementalOffset=0 -XX:CMSExpAvgFactor=25
```

Apesar de ser um coletor muito utilizado, ele não se encontra nas versões mais recentes do java então irei só deixar em inglês para os curiosos.

### CMSIncrementalMode 

> Enables incremental mode. Note that the CMS collector must also be enabled (with  `-XX:+UseConcMarkSweepGC`) for this option to work.

---

### CMSIncrementalPacing

> Enables automatic pacing. The incremental mode duty cycle is automatically adjusted based on statistics collected while the JVM is running.

---

### CMSIncrementalDutyCycle

> The percentage (0 to 100) of time between minor collections that the CMS collector is allowed to run. If  `CMSIncrementalPacing`  is enabled, then this is just the initial value.

---

### CMSIncrementalDutyCycleMin

> The percentage (0 to 100) that is the lower bound on the duty cycle when  `CMSIncrementalPacing`  is enabled.

---

### CMSIncrementalSafetyFactor

> The percentage (0 to 100) used to add conservatism when computing the duty cycle.

---

### CMSIncrementalOffset

> The percentage (0 to 100) by which the incremental mode duty cycle is shifted to the right within the period between minor collections.

---

### CMSExpAvgFactor

> The percentage (0 to 100) used to weight the current sample when computing exponential averages for the CMS collection statistics.

---

### Reference List

Se quiser saber mais leia a documentação oficial da oracle.

 - [JDK Options](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html)
 - [Java Platform, Standard Edition HotSpot Virtual Machine Garbage Collection Tuning Guide - JDK 8](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/)
 - [HotSpot Virtual Machine Garbage Collection Tuning Guide - JDK 15](https://docs.oracle.com/en/java/javase/15/gctuning/index.html)
 - [Java Platform, Standard Edition HotSpot Virtual Machine Garbage Collection Tuning Guide - JDK 9](https://docs.oracle.com/javase/9/gctuning/toc.htm)
 - [Fusion Middleware Performance and Tuning for Oracle WebLogic Server](https://docs.oracle.com/cd/E21764_01/web.1111/e13814/toc.htm)
 - [OHI Value-Based Payments](https://docs.oracle.com/cd/E74363_01/ohi_vbp_-_installation_guide--20160224-094432-html-chunked/index.html)
 - [ZGC](https://wiki.openjdk.java.net/display/zgc/Main)
 - [Tuning the JVM – G1GC Garbage Collector Flags for Minecraft](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/)
