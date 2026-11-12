+++
title = "Quadrante"
template = "pages/project.html"

[extra]
img = "watchface.png"
link = "/it/projects/watchface"
preTitle = "QUADRANTE GARMIN"
+++

## Descrizione - Work in progress

This is a watchface I created for my Garmin watch between 2024 and 2025, since I didn't find a satisfying watchface for my specific needs. 

The project grew more then I had originally expected, and the final result was pretty good, so I decided to publish it on the *Connect IQ store* (Garmin's app store). At the moment it is available as <a class="accent-txt" href="https://apps.garmin.com/apps/e755e7f-1b08-46cc-bd74-e9a1cb46053f">Meteo 2.0</a>.  


## Caratteristiche

The main feature of this watchface is the **dynamic background**, which changes depending on weather conditions and time.  
This required the creation of a sun calculation module, which is not included in the basic Monkey C language, that was later replaced with SunCalc for more accurate results.

Other features include **data fields**, battery indicator, second indicator (displayed only on wrist gesture), and the **weather and moon icons**.

All the fonts and images used in the watchface have been created from scratch, including the weather and moon icons. 

A peculiarity of this watchface, and something I wanted from the beginning of the project, is the **high customizability** of *what* you see, and *how* you see it. On the settings, you can change colours, data fields, background and whether to see or not the elements on the screen.

To conclude, the watchface is totally **free and open-source**, and the source code is published on GitHub under an MIT license.

## Monkey C

Garmin fornisce un <a href="https://developer.garmin.com/connect-iq/overview/" class="accent-txt">SDK</a> per la creazione di app per i suoi dispositivi, e il linguaggio di programmazione usato è chiamato *Monkey C*. Esso è una fusione tra diversi linguaggi, come *C++*, *JavaScript*, *Python* e *Php*. 