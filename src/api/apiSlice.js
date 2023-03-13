import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api'

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL
    }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodoList : builder.query({
          query: () => "todos",
          providesTags: ["Todos"]
            
        }),
        createTask: builder.mutation({
          query: (newTask) => ({
            url: "/todos",
            method: "POST",
            body: newTask
          }),
          // invalidatesTags: ["Todos"] //This option is ideal for querying the API every time there is a change in the elements. On this occasion it is commented since the api is read-only and you will not be able to obtain the changes made.
        }),
        deleteTask: builder.mutation({
          query: (id) => ({
            url: `/todos/${id}`,
            method: "DELETE"
          }),
          // invalidatesTags: ["Todos"]
        }),
        updateTask: builder.mutation({
          query: (task) => ({
            url: `/todos/${task.id}`,
            method: "PATCH",
            body: task
          }),
          // invalidatesTags: ["Todos"]
        })

    })
})

export const { useGetTodoListQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = api