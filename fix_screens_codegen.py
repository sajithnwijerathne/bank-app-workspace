import os
import glob

files = glob.glob('node_modules/react-native-screens/src/fabric/**/*.ts', recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if 'CodegenTypes as CT' in content:
        content = content.replace('CodegenTypes as CT,', '')
        content = content.replace('CodegenTypes as CT', '')
        content = content.replace('CT.', '')
        
        # Prepend the required codegen types
        header = "import type { WithDefault, Int32, Float, Double, DirectEventHandler, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';\n"
        content = header + content
        
        with open(file, 'w') as f:
            f.write(content)
        print(f"Fixed {file}")
