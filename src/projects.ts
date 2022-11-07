type Project = {
    name: string;
    url: string;
    tools: string[];
    project_description: string;
    image_path: string;
    image_description: string;
}

export const projects: Project[] = [
    {
        name: "RayJL",
        url: "https://github.com/Blackgaurd/RayJL",
        tools: ["Julia", "Python"],
        project_description: "Fully functional, optimized and multithreaded ray-tracing library built from scratch. Support for poly-mesh files, mirrors, refraction, colored lights and more.",
        image_path: "images/rayjl.png",
        image_description: "Torus triangle mesh with green and red point lights casting shadows on the ground. Rendered in ~5 seconds on 8 threads.",
    },
    {
        name: "GDT",
        url: "https://github.com/Blackgaurd/GDT",
        tools: ["Python"],
        project_description: "Genetic Decision Tree. An algorithm that mimicks biological evolution in order to construct optimized decision trees for data classification.",
        image_path: "images/gdt.png",
        image_description: "Graphs demonstrating how the population size of the algorithm affects factors such as training time, test accuracy and how fast the algorithm converges.",
    },
    {
        name: "AP Calc BC Notes",
        url: "https://github.com/Blackgaurd/AP-CalcBC-Notes",
        tools: ["LaTeX"],
        project_description: "Complete set of notes for the AP Calculus BC course (100+ pages). Includes all units, as well as practice problems and solutions explained in rigurous detail.",
        image_path: "images/calc.png",
        image_description: "A screenshot of the notes (Taylor Series section).",
    },
    {
        name: "TI-84 Wordle",
        url: "https://github.com/Blackgaurd/TI84-Wordle",
        tools: ["C", "Assembly"],
        project_description: "Wordle clone written using the C/CE Toolchain and compiled for the ez80 processor. Comes with the (almost) complete word list from the original Wordle.",
        image_path: "images/wordle.jpg",
        image_description: "A demonstration of the compiled game being played on a TI-84 Plus CE.",
    },
    {
        name: "fastcontain",
        url: "https://github.com/Blackgaurd/fastcontain",
        tools: ["Python", "Cython"],
        project_description: "An alternative to Python's built-in 'in' operator written in Cython using string hashing. Almost as fast as the native C implementation.",
        image_path: "images/fastcontain.png",
        image_description: "A snippet of the source code for the fastcontain module.",
    },
    {
        name: "YourSleep",
        url: "https://github.com/Blackgaurd/IgnitionHacks2022",
        tools: ["Svelte", "TailwindCSS", "Typescript", "Java"],
        project_description: "Personalized circadian cycle calculator that learns from your sleep habits over time. Built for IgnitionHacks 2022.",
        image_path: "images/yoursleep.png",
        image_description: "Screenshot from the live demo of the project.",
    }
]