# s3_trigger_lambda_test

---

## 同時実行数=1, Lambda内wait時間=3 sec

```
2024-04-28T07:25:48.185Z	6b8db720-cf27-4ea3-b651-49529fe7ab9c	INFO	s3-trigger-lambda-test-image/006.png
2024-04-28T07:25:51.774Z	b4641749-cb3e-498c-bf8e-ffcd6b6ce180	INFO	s3-trigger-lambda-test-image/002.png
2024-04-28T07:25:55.277Z	8f0cfd0c-7f8a-4012-8564-1e85144de592	INFO	s3-trigger-lambda-test-image/001.png
2024-04-28T07:25:58.361Z	8842ff46-8a0e-43a2-a306-838eb7566526	INFO	s3-trigger-lambda-test-image/009.png
2024-04-28T07:26:05.404Z	7ba6dce3-0e95-4c26-9d25-75370e3be4df	INFO	s3-trigger-lambda-test-image/003.png
2024-04-28T07:26:20.297Z	edce5c9b-3f47-46ca-a72c-c404dc9fcb13	INFO	s3-trigger-lambda-test-image/004.png
2024-04-28T07:26:24.821Z	9f0d99c7-d558-4ebb-9b79-6b52330000d6	INFO	s3-trigger-lambda-test-image/005.png
2024-04-28T07:26:48.552Z	8d210e43-a557-4493-81cf-bbf2e11eeb87	INFO	s3-trigger-lambda-test-image/008.png
2024-04-28T07:26:54.450Z	3c37e4d5-0e68-4eda-8735-5b425b352345	INFO	s3-trigger-lambda-test-image/007.png
2024-04-28T07:27:00.975Z	e9643a5f-c464-460b-8ef3-e3bf6e020f07	INFO	s3-trigger-lambda-test-image/010.png
```

## 同時実行数=2, Lambda内wait時間=3 sec

```
2024-04-28T07:33:22.320Z	734a2dbc-0106-4645-97fe-574036f137ca	INFO	s3-trigger-lambda-test-image/006.png
2024-04-28T07:33:25.615Z	184b3ece-c010-4e8c-ba9b-766601eeced6	INFO	s3-trigger-lambda-test-image/004.png
2024-04-28T07:33:28.918Z	4c51a4f0-6148-4038-9550-1671e11f3a74	INFO	s3-trigger-lambda-test-image/005.png
2024-04-28T07:33:39.768Z    5c9044d3-16d1-46c1-8ebd-b9fe2dd251ba    INFO    s3-trigger-lambda-test-image/007.png 
2024-04-28T07:33:56.918Z    71349448-3f9a-451d-a7a4-8e51f5a26d45    INFO    s3-trigger-lambda-test-image/008.png 
```

```
2024-04-28T07:33:22.396Z	7051bed9-2ee3-48e8-b338-4632695fe40a	INFO	s3-trigger-lambda-test-image/001.png
2024-04-28T07:33:25.632Z	05ed3676-ebd8-4c91-b82b-6bfd791d013b	INFO	s3-trigger-lambda-test-image/009.png
2024-04-28T07:33:29.792Z	5fab7c90-b125-4768-86c6-53b5fd279202	INFO	s3-trigger-lambda-test-image/010.png
2024-04-28T07:33:39.857Z	5000f2c5-2ddb-46b3-b7c6-aafae3bfc4c2	INFO	s3-trigger-lambda-test-image/002.png
2024-04-28T07:33:55.800Z	8c48ec1a-fd98-4bf8-bf85-b7f561139902	INFO	s3-trigger-lambda-test-image/003.png
```

---
