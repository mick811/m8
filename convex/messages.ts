import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const send = mutation({
    args: {
        author: v.union(v.string(), v.literal("assistant")),
        content: v.string(),
        roomId: v.id("rooms"),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("messages", {
            author: args.author,
            content: args.content,
            roomId: args.roomId,
        });
    }
})

export const list = query({
    args: {
        roomId: v.id("rooms"),
    },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("messages")
            .withIndex("by_room", (q) => q.eq("roomId", args.roomId))
            .order("asc")
            .collect(); // might change later if it causes performance issues
    }
})