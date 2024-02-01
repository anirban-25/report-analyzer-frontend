from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from llama_index.embeddings import LangchainEmbedding

def setup_embed_model():
    model_name = "sentence-transformers/all-mpnet-base-v2"
    return LangchainEmbedding(HuggingFaceEmbeddings(model_name=model_name))
