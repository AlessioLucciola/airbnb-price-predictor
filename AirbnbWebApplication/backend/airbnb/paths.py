from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
DISTANCES_ROOT = os.path.join(BASE_DIR, "api", "utils", "distances", "json")
MODELS_ROOT = os.path.join(BASE_DIR, "api", "utils", "models", "model_files")
