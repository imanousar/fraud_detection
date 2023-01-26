from flask import Blueprint
from flask import request
from services import models_service
import warnings

warnings.filterwarnings("ignore")

api = Blueprint(
    name="models_controller", import_name="models_controller", url_prefix="/models"
)


@api.route("", methods=["POST"])
def get_prediction():
    """
    Get request to predict the fraud.
    """

    data = request.get_json()

    prediction = models_service.main(data)
    return prediction, 200
