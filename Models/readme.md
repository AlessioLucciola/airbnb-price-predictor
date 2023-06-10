# Introduction
In this project

# Results
## Price Models
### Linear Regression
Best parameters for linear regression:
- aggregationDepth = 2
- elasticNetParam = 0.0
- epsilon = 1.35
- featuresCol = features
- fitIntercept = True
- labelCol = price
- loss = squaredError
- maxBlockSizeInMB = 0.0
- maxIter = 100
- predictionCol = prediction
- regParam = 0.0
- solver = auto
- standardization = True
- tol = 1e-06

Results:
- MSE for linear regression on training set: 0.24646070799188008
- RMSE for linear regression on training set: 0.49644809194102063
- MAE for linear regression on training set: 0.3873444914908169
- R2 for linear regression on training set: 0.4360307324880086
- R2_adj for linear regression on training set: 0.43602322391035564
- MSE for linear regression on testing set: 0.2498254351155321
- RMSE for linear regression on testing set: 0.49982540463198954
- MAE for linear regression on testing set: 0.3899726515939456
- R2 for linear regression on testing set: 0.43255128549239363
- R2_adj for linear regression on testing set: 0.4325109703750838

### Random Forest
Best parameters for random forest regressor:
- bootstrap = True
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = auto
- featuresCol = features
- impurity = variance
- labelCol = price
- leafCol = 
- maxBins = 32
- maxDepth = 10
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- numTrees = 80
- predictionCol = prediction
- seed = -9210051078898526106
- subsamplingRate = 1.0

Results:
- MSE for random forest regressor on training set: 0.18574261851608875
- RMSE for random forest regressor on training set: 0.4309786752451782
- MAE for random forest regressor on training set: 0.3327328946278369
- R2 for random forest regressor on training set: 0.5750197494996999
- R2_adj for random forest regressor on training set: 0.575014080728073
- MSE for random forest regressor on testing set: 0.18492630218749198
- RMSE for random forest regressor on testing set: 0.43003058285137347
- MAE for random forest regressor on testing set: 0.3321758293935531
- R2 for random forest regressor on testing set: 0.5807815684757687
- R2_adj for random forest regressor on testing set: 0.5807518577435558

### Gradient Boosted Trees
Best parameters for gradient-boosted trees:
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = all
- featuresCol = features
- impurity = variance
- labelCol = price
- leafCol = 
- lossType = squared
- maxBins = 32
- maxDepth = 6
- maxIter = 13
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- predictionCol = prediction
- seed = -7454223888317409867
- stepSize = 0.2
- subsamplingRate = 1.0
- validationTol = 0.01

Results:
- MSE for gradient-boosted tree regressor on training set: 0.15446737792813656
- RMSE for gradient-boosted tree regressor on training set: 0.39302338089245603
- MAE for gradient-boosted tree regressor on training set: 0.3000783912817505
- R2 for gradient-boosted tree regressor on training set: 0.6465776918056215
- R2_adj for gradient-boosted tree regressor on training set: 0.6465729775386629
- MSE for gradient-boosted tree regressor on testing set: 0.16046163530958224
- RMSE for gradient-boosted tree regressor on testing set: 0.40057662851142756
- MAE for gradient-boosted tree regressor on testing set: 0.3053352055527062
- R2 for gradient-boosted tree regressor on testing set: 0.6362417120843388
- R2_adj for gradient-boosted tree regressor on testing set: 0.6362159319080158