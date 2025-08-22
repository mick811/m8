import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Query to list all rooms for a specific user
 * @param userId - The ID of the user whose rooms to retrieve
 * @returns Array of room objects belonging to the user
 */
export const list = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("rooms")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .collect();
    },
})

/**
 * Mutation to create a new room
 * @param userId - The ID of the user creating the room
 * @param title - The title/name of the room
 * @returns The ID of the newly created room
 */
export const create = mutation({
    args: {
        userId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("rooms", {
            userId: args.userId,
            title: args.title,
        });
    },
});