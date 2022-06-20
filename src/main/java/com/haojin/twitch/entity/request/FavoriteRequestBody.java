package com.haojin.twitch.entity.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.haojin.twitch.entity.db.Item;

public class FavoriteRequestBody {
    @JsonProperty("favorite")
    private Item favoriteItem;

    public Item getFavoriteItem() {
        return favoriteItem;
    }

}
