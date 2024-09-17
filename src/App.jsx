import React from "react";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRating from "./components/StarRating";
import Accordion from "./components/Accordian/Accordion";
import ImageSlider from "./components/ImageSlider";
import TreeMenuComponent from "./components/TreeView/TreeMenuComponent";
import GitHubProfileFinder from "./components/GitHubProfileFinder";
import TicToc from "./components/TicToc";
import VerticalScrollIndicator from "./components/VerticalScrollIndicator";
import ScrollToTopBottom from "./components/ScrollToTopBottom";
import AutocompleteSearch from "./components/AutocompleteSearch";

function App() {
  return (
    <div className="overflow-x-hidden">
     
      <RandomColorGenerator />
      <StarRating />
      <Accordion />
      <ImageSlider />
      <TreeMenuComponent />
      <GitHubProfileFinder />
      <TicToc/>
      <VerticalScrollIndicator/>
      <ScrollToTopBottom/>
      <AutocompleteSearch/>
    </div>
  );
}

export default App;
