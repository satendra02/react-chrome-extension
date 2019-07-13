/*global chrome*/
/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import "./content.css";

const Giphys = () => {
    return "HELOO WORLD";
};

for (const node of document.getElementsByTagName("textarea")) {
    const div = document.createElement("div");
    node.parentNode.insertBefore(div, node);

    ReactDOM.render(<Giphys />, div);
}
