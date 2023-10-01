<template>
    <div>

        <div class="mt-10 max-w-7xl mx-auto p-5 bb-0 mb-0 justify-center text-center items-center">
            <div class="block">
                <div class="flex justify-center">
                    <img src="/ppsquare.jpg" class="rounded-full m-5 w-40" alt="Photo de moi">
                </div>
                <h1 class="flex text-4xl md:text-7xl font-sfbold justify-center">
                    Raphaël Baticle
                </h1>
                <h2 class="flex text-xl md:text-2xl justify-center m-2">
                    Développeur Web en freelance et étudiant en informatique
                </h2>
            </div>
        </div>


        <div class="mx-auto min-h-screen max-w-screen-xl px-6 pb-12 font-sans md:px-12 md:pb-20 lg:px-24 lg:py-0 mt-0">
            <a href="#content"
               class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                Skip to Content
            </a>
            <div class="lg:flex lg:justify-between lg:gap-4">
                <header
                    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <nav class="nav hidden lg:block" aria-label="In-page jump links">
                            <ul class="mt-16 w-max">
                                <li>
                                    <a class="group flex items-center py-3 active" href="#about">
                                        <span
                                            class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span
                                            class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            A Propos
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3" href="#experience">
                                        <span
                                            class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span
                                            class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            Experience
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3" href="#projects">
                                        <span
                                            class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span
                                            class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            Projets
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
                        <li class="mr-5 text-xs"><a class="block hover:text-slate-200"
                                                    href="https://github.com/lasauce6" target="_blank" rel="noreferrer"><span
                            class="sr-only">GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 class="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a></li>
                        <li class="mr-5 text-xs"><a class="block hover:text-slate-200"
                                                    href="https://fr.linkedin.com/in/rapha%C3%ABl-baticle-763063229"
                                                    target="_blank"
                                                    rel="noreferrer"><span class="sr-only">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 class="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a></li>
                    </ul>
                </header>


                <main id="content" class="pt-24 lg:w-3/5 lg:py-24">
                    <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="About me">
                        <div
                            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">A
                                Propos</h2>
                        </div>
                        <div>
                            <p class="mb-4">
                                Étudiant en informatique à <a href="https://www.u-pec.fr/" target="_blank"
                                                              class="font-bold hover:text-green-400 focus-visible:text-green-400"
                                                              rel="noreferrer">l'Université Paris Est Créteil</a>,
                                je suis passionné par la programmation et la cybersécurité.<br>
                                Micro-entrepreneur, je suis disponible pour différents projets de développement web et
                                assistance informatique.
                            </p>
                            <p>
                                Projet d'avenir ?<br>
                                J'aimerais devenir pentester et travailler dans la sécurité informatique.
                            </p>
                        </div>
                    </section>
                    <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Work experience">
                        <div
                            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                                Experience</h2></div>
                        <div>
                            <ol class="group/list">
                                <li class="mb-12">
                                    <div
                                        class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header
                                            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                            aria-label="2018 to Present">2021 — Maintenant
                                        </header>
                                        <div class="z-10 sm:col-span-6">
                                            <h3 class="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <span>Création de site webs · Micro entreprise</span>
                                                </div>

                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">
                                                Création de site webs personalisés pour différentes entreprises ou
                                                associations.
                                                Développement du front et back-end, gestion de la base de données,
                                                hébergement et maintenance.
                                            </p>
                                            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Laravel
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        PHP
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Linux
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Nginx
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        MySQL
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-12">
                                    <div
                                        class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header
                                            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                            aria-label="July to December 2017">2018 — Maintenant
                                        </header>
                                        <div class="z-10 sm:col-span-6">
                                            <h3 class="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <span>Maintenance et dépannage informatique · Micro entreprise</span>
                                                </div>
                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">
                                                Résolutions de différents problèmes informatiques, installation de
                                                logiciels, nettoyage de virus, récupération de données.
                                                Montage et démontage de PC, installation de composants.
                                            </p>

                                            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Windows
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Linux
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        MacOS
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-12">
                                    <div
                                        class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header
                                            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                            aria-label="2016 to 2017">2016 — 2020
                                        </header>
                                        <div class="z-10 sm:col-span-6">
                                            <h3 class="font-medium leading-snug text-slate-200">
                                                <div><a
                                                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                                                    href="https://capitec-sgdf.org/" target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Captation image et son avec Capitec SGDF"><span
                                                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Captation image et son · Capitec SGDF <span
                                                    class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                                                                              viewBox="0 0 20 20"
                                                                              fill="currentColor"
                                                                              class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                              aria-hidden="true"><path
                                                    fill-rule="evenodd"
                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                    clip-rule="evenodd"></path></svg></span></span></a></div>
                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">Captation image et son sur différents
                                                concerts et évènements dans le cadre des Scouts et Guides de France avec
                                                l'équipe audiovisuelle des Scouts et Guides de l'Essonne </p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <div class="mt-12"><a
                                class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                                aria-label="View Full Résumé" href="/CV%20Raphaël%20BATICLE.pdf"><span><span
                                class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none">Voir le CV </span><span
                                class="whitespace-nowrap"><span
                                class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none"></span><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"><path fill-rule="evenodd"
                                                         d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                                         clip-rule="evenodd"></path></svg></span></span></a></div>
                        </div>
                    </section>
                    <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Selected projects">
                        <div
                            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                                Projets</h2></div>
                        <div>
                            <ul class="group/list">
                                <li class="mb-12">
                                    <div
                                        class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div class="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                                                href="https://github.com/Lasauce6/VinciShop"
                                                target="_blank" rel="noreferrer"
                                                aria-label="Pop up store pour le lycée Léonard de Vinci"><span
                                                class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Pop-up store · <span
                                                class="inline-block"> VinciShop<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor"
                                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                aria-hidden="true"><path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"></path></svg></span></span></a></h3>
                                            <p class="mt-2 text-sm leading-normal">Création d'un pop-up store pour le
                                                lycée Léonard de Vinci dans le cadre d'un projet des BTS commercials.
                                                Mise en place d'un site d'e-commerce afin de vendre différents produits
                                                en association avec un apiculteur</p>
                                            <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                                                <li class="mr-4"><a
                                                    class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                                    href="https://www.vinci-melun.org/"
                                                    target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                                                        <path
                                                            d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                        <path
                                                            d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                    </svg>
                                                    <span>Lycée Léonard de Vinci</span></a></li>
                                            </ul>
                                            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Laravel
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Bootstrap
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Sqlite
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <img alt="" loading="lazy" width="200" height="48" decoding="async"
                                             data-nimg="1"
                                             class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             style="color: transparent;"
                                             src="https://raw.githubusercontent.com/Lasauce6/VinciShop/master/storage/app/imgs/logo.svg">
                                    </div>
                                </li>
                                <li class="mb-12">
                                    <div
                                        class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div class="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                                                href="#" target="_blank"
                                                rel="noreferrer" aria-label="Joie et Gymnastique Website"><span
                                                class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>JoieEtGym <span
                                                class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 20 20" fill="currentColor"
                                                                          class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                          aria-hidden="true"><path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"></path></svg></span></span></a></h3>
                                            <p class="mt-2 text-sm leading-normal">Site web pour l'association de
                                                gymnastique du Val d'Yerres Joie et Gymnastique</p>
                                            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Laravel
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Voyager
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        Bootstrap
                                                    </div>
                                                </li>
                                                <li class="mr-1.5 mt-2">
                                                    <div
                                                        class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                                                        SQL
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <img alt="" loading="lazy" width="200" height="48" decoding="async"
                                             data-nimg="1"
                                             class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             style="color: transparent;"
                                             src="https://raw.githubusercontent.com/Lasauce6/JoieEtGym/master/public/assets/images/logob.png">
                                    </div>
                                </li>
                            </ul>
<!--                            <div class="mt-12">-->
<!--                                <a class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"-->
<!--                                   aria-label="View Full Project Archive" href="/archive">-->
<!--                                    <span>-->
<!--                                        <span-->
<!--                                            class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none">Voir tout les </span><span-->
<!--                                        class="whitespace-nowrap">-->
<!--                                        <span-->
<!--                                            class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none">projets-->
<!--                                        </span>-->
<!--                                        <svg-->
<!--                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
<!--                                            class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"-->
<!--                                            aria-hidden="true">-->
<!--                                            <path fill-rule="evenodd"-->
<!--                                                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"-->
<!--                                                  clip-rule="evenodd">-->
<!--                                                -->
<!--                                            </path>-->
<!--                                        </svg>-->
<!--                                    </span>-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </div>-->
                        </div>
                    </section>

                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>