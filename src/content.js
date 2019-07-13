/*global chrome*/
/* src/content.js */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import giphyAPI from "giphy-api";
import "./content.css";

const GIPHY_KEY = "BbjXTpBIYN0GwoBCRpPLUCF08EPJ6PUp";

const Giphys = () => {
    const [search, setSearch] = useState("");
    const [giph, setGiph] = useState(null);

    async function findGiphy() {
        const results = await giphyAPI({
            apiKey: GIPHY_KEY,
            https: true
        }).search(search);

        setGiph(results.data.filter(d => d.type === "gif")[0]);
    }

    function onSubmit(event) {
        findGiphy();
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {giph ? (
                <img src={giph.images.downsized_medium.url} alt={giph.slug} />
            ) : null}
        </form>
    );
};

for (const node of document.getElementsByTagName("textarea")) {
    const div = document.createElement("div");
    node.parentNode.insertBefore(div, node);

    ReactDOM.render(<Giphys />, div);
}
