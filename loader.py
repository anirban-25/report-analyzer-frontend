from llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext
from llama_index.llms import HuggingFaceLLM
def load_documents(directory_path):
    return SimpleDirectoryReader(directory_path).load_data()
