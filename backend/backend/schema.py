import graphene
import  webscraping.schema


class Query(webscraping.schema.Query, graphene.ObjectType):
    pass


# class Mutation(graphene.ObjectType):
#     pass


schema = graphene.Schema(query=Query)
