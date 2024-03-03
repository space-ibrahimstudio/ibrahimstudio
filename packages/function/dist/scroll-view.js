"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollView = void 0;
const scrollView = (offset, id) => {
    const element = document.querySelector(`[id="${id}"]`);
    if (element) {
        const yOffset = offset;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
    else {
        console.error(`Element with id ${id} not found.`);
    }
};
exports.scrollView = scrollView;
