import graphene

from graphene_django.types import DjangoObjectType

from webscraping.models import Keyword, Result


class KeywordType(DjangoObjectType):
    class Meta:
        model = Keyword


class ResultType(DjangoObjectType):
    class Meta:
        model = Result


class Query(object):
    keywords = graphene.List(KeywordType, search=graphene.String())
    results = graphene.List(ResultType, keyword_id=graphene.Int())

    def resolve_keywords(self, info, search=None):
        result = Keyword.objects.all()
        if search is not None:
            result = result.filter(keyword__contains=result)
        return result

    def resolve_results(self, info, keyword_id):
        return Result(keyword_id=keyword_id).objects.all()

# class Mutation(graphene.ObjectType):
