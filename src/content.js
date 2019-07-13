/*global chrome*/
/* src/content.js */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import giphyAPI from "giphy-api";
import "./content.css";

const GIPHY_KEY = "BbjXTpBIYN0GwoBCRpPLUCF08EPJ6PUp";

const Giphys = ({ target }) => {
    const [search, setSearch] = useState("");

    async function findGiphy() {
        const results = await giphyAPI({
            apiKey: GIPHY_KEY,
            https: true
        }).search(search);

        const giph = results.data.filter(d => d.type === "gif")[0];
        target.value += `![${giph.slug}](${giph.images.downsized_medium.url})`;

        target.dispatchEvent(new Event("change"));

        setSearch("");
    }

    function onSubmit(event) {
        event.preventDefault();
        findGiphy();
    }

    return (
        <form onSubmit={onSubmit}>
            Add a Giph 👉
            <input
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
        </form>
    );
};

for (const node of document.getElementsByTagName("textarea")) {
    const div = document.createElement("div");
    node.parentNode.insertBefore(div, node);

    ReactDOM.render(<Giphys target={node} />, div);
}
