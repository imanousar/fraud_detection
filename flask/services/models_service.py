import pandas as pd
import pickle


def main(features):

    df = pd.DataFrame([features], columns=features.keys())
    df = df.apply(pd.to_numeric, errors="coerce")

    m = pickle.load(open("repo/manou_model.pkl", "rb"))
    prediction = m.predict(df)

    return str(prediction[0])
