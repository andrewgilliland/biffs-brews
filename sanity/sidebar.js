import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { MdHome } from "react-icons/md";

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slicks Slice's`)
    .items([
      // create new sub item
      S.listItem()
        .title("Home Page")
        .icon(() => <MdHome />)
        .child(
          S.editor()
            .schemaType("storeSettings")
            // make a new document ID, so we don't have a rnadom string of numbers
            .documentId("downtown")
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "storeSettings"
      ),
    ]);
}
