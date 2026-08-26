import os

path = "node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens"
for root, _, files in os.walk(path):
    for file in files:
        if file.endswith(".kt"):
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                content = f.read()
            if "getFabricUIManagerNotNull" in content:
                content = content.replace("import com.swmansion.rnscreens.helpers.getFabricUIManagerNotNull\n", "import com.facebook.react.uimanager.common.UIManagerType\n")
                content = content.replace(".getFabricUIManagerNotNull(reactContext)", ".getUIManager(reactContext, UIManagerType.FABRIC)!!")
                content = content.replace(".getFabricUIManagerNotNull(themedContext)", ".getUIManager(themedContext, UIManagerType.FABRIC)!!")
                with open(filepath, "w") as f:
                    f.write(content)
