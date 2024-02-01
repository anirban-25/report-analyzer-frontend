from llama_index import ServiceContext
def setup_service_context(chunk_size, llm, embed_model):
    return ServiceContext.from_defaults(chunk_size=chunk_size, llm=llm, embed_model=embed_model)
