from logger import setup_logger
from loader import load_documents
from llama_setup import setup_llama_cpp
from embedded_setup import setup_embed_model
from service_context import setup_service_context
from llama_index import VectorStoreIndex
from llama_index.prompts.prompts import SimpleInputPrompt
from intent_handler import load_intents
from intent_handler import get_response
def main():
    setup_logger()
    documents = load_documents("documents/")
    llm = setup_llama_cpp()
    system_prompt = "You are a Q&A assistant. Your goal is to answer questions as accurately as possible based on the reports provided."
    query_wrapper_prompt = SimpleInputPrompt("<|USER|>{query_str}<|ASSISTANT|>")
    embed_model = setup_embed_model()
    service_context = setup_service_context(2048, llm, embed_model)
    index = VectorStoreIndex.from_documents(documents, service_context=service_context)
    query_engine = index.as_query_engine()

    intents = load_intents('intents.json')
    response = query_engine.query("diagnose my medical report within 500 words")
    print(response)

    while True:
        query = input()
        response = get_response(query_engine, intents, query)

if __name__ == "__main__":
    main()
